import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { articleDetailsCommentReducer, fetchCommentsByArticleId } from "features/ArticleCommentList";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "widgets/Page/ui/Page";
import { ArticleRecommendationsList } from "features/ArticleRecommendationsList/ui/ArticleRecommendationsList";

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    const reducers: ReducerList = {
        articleDetailsComments: articleDetailsCommentReducer
    }



    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (

        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)
