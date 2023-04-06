import cls from "./ArticlesPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { articlesPageReducer, getArticles } from "../model/slice/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageIsLoading } from "../model/selectors/artcilesPageSelectors";
import { Page } from "widgets/Page/ui/Page";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage/fetchNextArticlePage";
import { useTranslation } from "react-i18next";
import { initArticlesPage } from "../model/services/initArticlesPage/initArticlesPage";
import { ArticlePageFilters, getArticlesPageFiltersPageView } from "features/ArticlesPageFilters";
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
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageFiltersPageView)
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
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)
