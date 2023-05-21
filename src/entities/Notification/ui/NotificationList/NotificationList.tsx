import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useNotifications } from "../../api/notificationApi";
import { VStack } from "@/shared/ui/Stack";
import { type Notification } from "../../model/types/notification";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props
    const { data, isLoading } = useNotifications(null)


    if (isLoading) {
        return (
            <VStack gap={'16'} className={classNames('', {}, [className])}>
                <Skeleton width={'100'} border={'8px'} height={86}/>
                <Skeleton width={'100'} border={'8px'} height={86}/>
                <Skeleton width={'100'} border={'8px'} height={86}/>
                <Skeleton width={'100'} border={'8px'} height={86}/>
            </VStack>
        );
    }


    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            {data?.map((item: Notification) => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    );
});

NotificationList.displayName = 'NotificationList'
