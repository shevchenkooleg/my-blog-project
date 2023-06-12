import cls from "./ArticleList.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { type HTMLAttributeAnchorTarget, memo } from "react";
import type { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import { Text, TextSize } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../model/consts/consts";

interface ArticleListProps {
    className?: string
    articles: Article[] | undefined
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
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
        target,
        view = ArticleView.SMALL
    } = props
    const { t } = useTranslation('articles')

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            isLoading={isLoading}
            key={article.id}
            className={cls.card}
            target={target}
        />
    )

    if (!isLoading && !articles?.length) {
        return <Text size={TextSize.L} className={cls.notFound} title={t('Статьи не найдены')}/>
    }

    return (
        <div
            data-testid={'ArticleList'}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles && articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});

ArticleList.displayName = 'ArticleList'
