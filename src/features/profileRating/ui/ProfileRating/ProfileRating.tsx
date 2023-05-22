import { memo, useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { useGetProfileRating, useRateProfile } from "@/features/profileRating/ui/api/profileRatingApi";
import { useTranslation } from "react-i18next";

export interface ProfileRatingProps {
    className?: string
    profileId: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props
    const { t } = useTranslation('profile')
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetProfileRating({ profileId: profileId ?? '', userId: String(userData?.id) })
    const rating = data?.[0]
    const [rateProfileMutation] = useRateProfile()

    const handleRateProfile = useCallback((starsCount: number) => {
        try {
            rateProfileMutation({
                profileId,
                rate: starsCount,
                userId: String(userData?.id) ?? ''
            })
        } catch (e) {
            console.log(e)
        }
    }, [profileId, rateProfileMutation, userData?.id])

    if (isLoading) {
        return null
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените этого пользователя')}
            onAccept={handleRateProfile}
            rate={rating?.rate}
        />
    );
});

export default ProfileRating

ProfileRating.displayName = 'ProfileRating'
