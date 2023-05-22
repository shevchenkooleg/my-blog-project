import { lazy, Suspense } from "react";
import { type ProfileRatingProps } from "./ProfileRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";


const ProfileRatingLazy = lazy(async () => await import('./ProfileRating'))

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
            <ProfileRatingLazy {...props}/>
        </Suspense>
    )
}


