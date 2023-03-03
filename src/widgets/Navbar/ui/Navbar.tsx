import cls from './Navbar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('войти')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};






