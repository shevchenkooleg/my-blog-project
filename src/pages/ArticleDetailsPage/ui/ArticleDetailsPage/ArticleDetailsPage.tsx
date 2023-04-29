import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { useSelector } from "react-redux";
import {
    addCommentForArticle,
    articleDetailsCommentReducer,
    fetchCommentsByArticleId,
    getArticleComments,
    getArticleCommentsIsLoading
} from "features/ArticleCommentList";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AddCommentForm } from "features/AddCommentForm";
import { Page } from "widgets/Page/ui/Page";
import { ArticleRecommendationsList } from "features/ArticleRecommendationsList/ui/ArticleRecommendationsList";

import {
    ArticleDetailsPageHeader
} from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const reducers: ReducerList = {
        articleDetailsComments: articleDetailsCommentReducer
    }

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle())
    }, [dispatch])


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
                    <VStack max>
                        <Text title={t('Комментарии')}/>
                        <AddCommentForm onSendComment={onSendComment}/>
                    </VStack>
                    <CommentList comments={comments} isLoading={isLoading}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)
