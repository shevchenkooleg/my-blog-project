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
import { getArticlesPageIsLoading, getArticlesPageView } from "../model/selectors/artcilesPageSelectors";
import { ArticleViewSelector } from "features/ArticleViewSelector";


interface ArticlesPageProps {
    className?: string
}

const reducer: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList())
    })
    console.log(articles)

    const onViewChange = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewChange}/>
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)
