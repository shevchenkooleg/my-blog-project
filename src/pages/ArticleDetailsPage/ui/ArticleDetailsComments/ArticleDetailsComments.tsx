import { memo, useCallback } from "react";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { AddCommentForm } from "features/AddCommentForm";
import { CommentList } from "entities/Comment";
import {
    addCommentForArticle,
    articleDetailsCommentReducer, fetchCommentsByArticleId,
    getArticleComments,
    getArticleCommentsIsLoading
} from "features/ArticleCommentList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleDetailsCommentsProps {
    id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { id } = props
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle())
    }, [dispatch])

    const reducers: ReducerList = {
        articleDetailsComments: articleDetailsCommentReducer
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack max>
                <Text title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
            </VStack>
            <CommentList comments={comments} isLoading={isLoading}/>
        </DynamicModuleLoader>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments'
