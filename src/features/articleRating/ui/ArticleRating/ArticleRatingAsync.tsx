import { lazy, Suspense } from 'react';
import { type ArticleRatingProps } from "@/features/articleRating/ui/ArticleRating/ArticleRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";



const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))


export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
    )
}