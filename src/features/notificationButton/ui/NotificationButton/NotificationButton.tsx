import cls from "./NotificationButton.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import Notification from "@/shared/assets/icons/Bell-Icon.svg";
import { NotificationList } from "../../../../entities/Notification/ui/NotificationList/NotificationList";
import { Popover } from "@/shared/ui/Popups";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { useMobile } from "@/shared/lib/hooks/useMobile/useMobile";

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const isMobile = useMobile()

    const onOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const onDCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={Notification} inverted={true}/>
        </Button>
    )

    if (isMobile) {
        return (
            <div>
                {trigger}
                <Drawer isOpen={isDrawerOpen} onClose={onDCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </div>
        )
    }

    return (
        <div>
            <Popover
                className={classNames('', {}, [className])}
                direction={"bottom left"}
                trigger={trigger}
            >
                <NotificationList className={cls.notifications}/>
            </Popover>
        </div>
    )
});

NotificationButton.displayName = 'NotificationButton'
