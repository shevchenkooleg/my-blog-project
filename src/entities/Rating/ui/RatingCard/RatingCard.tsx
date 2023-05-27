import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Card } from "@/shared/ui/Card";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from '@/shared/ui/Text'
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";
import { Drawer } from "@/shared/ui/Drawer";

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (startsCount: number) => void
    onAccept?: (startsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation('rating')
    const {
        className,
        hasFeedback,
        onAccept,
        feedbackTitle,
        onCancel,
        title,
        rate = 0
    } = props

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')
    const isMobile = useMobile()

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])


    const modalContent = (
        <VStack max gap={'32'}>
            <Text title={feedbackTitle}/>
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback}/>
            <HStack justify={'end'} max gap={'16'}>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandler} theme={ButtonTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align={'center'} gap={'16'}>
                <Text title={starsCount ? t('Ваша оценка') : title}/>
                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars}/>
            </VStack>
            {
                isMobile
                    ? <Drawer isOpen={isModalOpen}>{modalContent}</Drawer>
                    : <Modal isOpen={isModalOpen}>{modalContent}</Modal>
            }
        </Card>
    );
});

RatingCard.displayName = 'RatingCard'
