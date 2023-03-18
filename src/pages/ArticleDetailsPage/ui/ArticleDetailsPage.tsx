import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import {
    articleDetailsCommentReducer,
    getArticleComments
} from "features/ArticleCommentList/model/slice/articleDetailsCemmentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "features/ArticleCommentList";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchCommentsByArticleId
} from "features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text title={t('Комментарии')} className={cls.commentTitle}/>
                <CommentList comments={comments} isLoading={isLoading}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)
