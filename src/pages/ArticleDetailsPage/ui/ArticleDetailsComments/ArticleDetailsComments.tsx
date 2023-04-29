import { memo, useCallback } from "react";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { AddCommentForm } from "features/AddCommentForm";
import { CommentList } from "entities/Comment";
import { addCommentForArticle, getArticleComments, getArticleCommentsIsLoading } from "features/ArticleCommentList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTranslation } from "react-i18next";

export const ArticleDetailsComments = memo(() => {
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle())
    }, [dispatch])


    return (
        <>
            <VStack max>
                <Text title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
            </VStack>
            <CommentList comments={comments} isLoading={isLoading}/>
        </>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments'
