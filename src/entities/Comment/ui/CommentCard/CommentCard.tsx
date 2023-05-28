import cls from "./CommentCard.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { type Comment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { HStack, VStack } from "@/shared/ui/Stack";
import { getRouteProfile } from "@/shared/const/router";

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <HStack gap={'16'} max>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton width={'100%'} height={50}/>
            </VStack>
        );
    }

    if (!comment) {
        return null
    }

    return (
        <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(String(comment.user.id))}>
                <HStack gap={'16'} max>
                    {comment.user.avatar && <Avatar size={30} avatar={comment.user.avatar}/>}
                    <Text title={comment.user.username}/>
                </HStack>
            </AppLink>
            <Text text={comment.text}/>
        </VStack>
    );
});

CommentCard.displayName = 'CommentCard'
