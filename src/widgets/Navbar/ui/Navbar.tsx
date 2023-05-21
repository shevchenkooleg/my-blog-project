import cls from './Navbar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from 'react-redux';
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from "@/features/avatarDropdown";

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])


    if (authData?.id) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('My blog APP')}/>
                <AppLink className={cls.createLink} theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
            </header>
        );
    } else {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={classNames(cls.links)}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('войти')}
                    </Button>
                </div>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
            </header>
        );
    }
});

Navbar.displayName = 'Navbar'


