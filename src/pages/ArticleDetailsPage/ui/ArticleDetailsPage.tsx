import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
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
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/ui/Page";
import { ArticlePageRecommendations } from "features/ArticlePageRecommendations/ui/ArticlePageRecommendations";
import {
    fetchArticleRecommendations
} from "features/ArticlePageRecommendations/model/services/fetchArticleRecommendations/fetchArticleRecommendations";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const reducers: ReducerList = {
        articleDetailsComments: articleDetailsCommentReducer
    }

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle())
    }, [dispatch])

    const onBackToList = () => {
        navigate(RoutePath.articles)
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
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
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id}/>
                <ArticlePageRecommendations/>
                <Text title={t('Комментарии')} className={cls.commentTitle}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={isLoading}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)
