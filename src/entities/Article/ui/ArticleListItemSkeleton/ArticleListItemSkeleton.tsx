import cls from "./ArticleListItemSkeleton.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ArticleView } from "../../model/consts/consts";

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleView.SMALL } = props

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border={'50%'} />
                        <Skeleton height={16} width={150} className={cls.username}/>
                        <Skeleton height={16} width={150} className={cls.date}/>
                    </div>
                    <Skeleton height={24} width={250} className={cls.title}/>
                    <Skeleton height={16} className={cls.types}/>
                    <Skeleton height={200} className={cls.img}/>
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} width={200} height={200}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16} className={cls.title}/>
            </Card>
        </div>
    );
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
