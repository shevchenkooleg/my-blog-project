import cls from "./CommentList.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { type Comment } from "entities/Comment";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text"

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
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((el) => (
                    <CommentCard className={cls.comment} key={el.id} comment={el} isLoading={isLoading}/>
                ))
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </div>
    );
});

CommentList.displayName = 'CommentList'
