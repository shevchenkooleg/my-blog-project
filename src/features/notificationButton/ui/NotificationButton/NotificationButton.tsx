import cls from "./NotificationButton.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import Notification from "shared/assets/icons/Bell-Icon.svg";
import { NotificationList } from "../../../../entities/Notification/ui/NotificationList/NotificationList";
import { Popover } from "shared/ui/Popups";

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction={"bottom left"}
            trigger={
                (<Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={Notification} inverted={true}/>
                </Button>)
            }>
            <NotificationList className={cls.notifications}/>
        </Popover>
    );
});

NotificationButton.displayName = 'NotificationButton'
