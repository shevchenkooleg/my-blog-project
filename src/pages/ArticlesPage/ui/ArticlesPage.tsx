import cls from "./ArticlesPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleList, type ArticleView } from "entities/Article";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slice/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../model/selectors/artcilesPageSelectors";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage/fetchNextArticlePage";
import { useTranslation } from "react-i18next";


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
    const view = useSelector(getArticlesPageView)

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({
            page: 1
        }))
    })

    const onViewChange = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView))
    }, [dispatch])

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
        <DynamicModuleLoader reducers={reducer}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewChange}/>
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
