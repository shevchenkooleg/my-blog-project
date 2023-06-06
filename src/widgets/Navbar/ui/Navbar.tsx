import cls from './Navbar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/authByUsername";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from 'react-redux';
import { Text, TextTheme } from '@/shared/ui/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from "@/features/avatarDropdown";
import { getRouteArticleCreate } from "@/shared/const/router";

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
                <AppLink className={cls.createLink} theme={AppLinkTheme.SECONDARY} to={getRouteArticleCreate()}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions} align={'center'} justify={'center'}>
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


