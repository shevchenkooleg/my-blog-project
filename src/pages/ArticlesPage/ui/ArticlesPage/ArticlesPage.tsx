import cls from "./ArticlesPage.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { DynamicModuleLoader, type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import {
    ArticlePageFilters,
    fetchNextArticlePage,
    ArticleInfiniteList,
    initArticlesPage,
    getArticlesPageError,
    articlesPageReducer
} from "@/features/articleList";
import { useSearchParams } from "react-router-dom";


interface ArticlesPageProps {
    className?: string
}

const reducer: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const dispatch = useAppDispatch()
    const error = useSelector(getArticlesPageError)
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    if (error) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Ошибка загрузки данных')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlePageFilters/>
                <ArticleInfiniteList/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)
