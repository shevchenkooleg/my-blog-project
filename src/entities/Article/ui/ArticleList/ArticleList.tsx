import cls from "./ArticleList.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import type { Article } from "../../model/types/artiicle";
import { ArticleView } from "../../model/types/artiicle";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return (
        new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} view={view} key={index}/>
        )))
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL
    } = props

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            isLoading={isLoading}
            key={article.id}
            className={cls.card}
        />
    )

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});

ArticleList.displayName = 'ArticleList'
