import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { RoutePath } from "@/shared/const/router";

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation()
    const { className } = props
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManager
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()


    const logOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])


    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Панель администратора'),
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {
                    content: t('Профиль пользователя'),
                    href: RoutePath.profile + String(authData.id)
                },
                {
                    content: t('Выйти'),
                    onClick: logOut
                }
            ]}
            trigger={<Avatar size={40} avatar={authData.avatar}/>}
            direction={'bottom left'}
        />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown'
