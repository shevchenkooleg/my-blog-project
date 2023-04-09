import cls from "./ArticlePageRecommendations.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import {
    articlePageRecommendationReducer,
    getArticleRecommendation
} from "../model/slice/articlePageRecommendationsSlice";
import { useSelector } from "react-redux";
import {
    getArticlePageRecommendationError,
    getArticlePageRecommendationIsLoading
} from "../model/selectors/articlePageRecommendationsSelectors";
import { Text, TextSize } from '../../../shared/ui/Text/Text'
import { ArticleList } from "entities/Article";
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton";

interface ArticlePageRecommendationProps {
    className?: string
}

export const ArticlePageRecommendations = memo((props: ArticlePageRecommendationProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const recommendation = useSelector(getArticleRecommendation.selectAll)
    const isLoading = useSelector(getArticlePageRecommendationIsLoading)
    const error = useSelector(getArticlePageRecommendationError)

    const reducers: ReducerList = {
        articleDetailsRecommendations: articlePageRecommendationReducer
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticlePageRecommendation, {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')}/>
                <div className={cls.recommendation}>
                    <ArticleListItemSkeleton/>
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
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePageRecommendation, {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')}/>
                <ArticleList className={cls.recommendation} articles={recommendation} target={"_blank"}/>
            </div>
        </DynamicModuleLoader>
    );
});

ArticlePageRecommendations.displayName = 'ArticlePageRecommendations'
