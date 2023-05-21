import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from '../../../shared/ui/Text/Text'
import { ArticleList } from "@/entities/Article";
import { ArticleListItemSkeleton } from "@/entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

interface ArticlePageRecommendationProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticlePageRecommendationProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3)

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')}/>
                <div>
                    <ArticleListItemSkeleton/>
                    <ArticleListItemSkeleton/>
                    <ArticleListItemSkeleton/>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <Text size={TextSize.L} title={t('Непредвиденная ошибка на сервере')}/>
        )
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target={"_blank"}
            />
        </div>
    );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList'
