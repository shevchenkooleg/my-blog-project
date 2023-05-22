import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { useGetArticleRating, useRateArticle } from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { t } = useTranslation('rating')
    const { className, articleId } = props
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetArticleRating({ articleId, userId: String(userData?.id) ?? '' })
    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((rate: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: String(userData?.id) ?? '',
                articleId,
                rate,
                feedback
            })
        } catch (e) {
            // handle error
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((startsCount: number, feedback?: string) => {
        handleRateArticle(startsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((startsCount: number) => {
        handleRateArticle(startsCount)
    }, [handleRateArticle])


    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    const rating = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Как вам статья?')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating

ArticleRating.displayName = 'ArticleRating'
