import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { type Comment } from "../../model/types/comment";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text"
import { VStack } from "shared/ui/Stack";

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation('comments')

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </VStack>
        )
    }

    return (
        <VStack gap={'16'} max
            className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((el) => (
                    <CommentCard key={el.id} comment={el} isLoading={isLoading}/>
                ))
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </VStack>
    );
});

CommentList.displayName = 'CommentList'
