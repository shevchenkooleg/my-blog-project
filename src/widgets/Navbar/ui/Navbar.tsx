import cls from './Navbar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const logOut = useCallback(() => {
        dispatch(userActions.logout())
        setIsAuthModal(false)
    }, [dispatch])

    console.log(i18n.language)


    if (authData?.id) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('My blog APP')}/>
                <AppLink className={cls.createLink} theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
                    {t('Создать статью')}
                </AppLink>
                <div className={classNames(cls.links)}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={logOut}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
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


