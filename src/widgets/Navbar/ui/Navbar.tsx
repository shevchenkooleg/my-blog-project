import cls from './Navbar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('войти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={ onToggleModal }>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                    'Amet beatae earum fuga magni non qui, sed suscipit tempora vero voluptate? ' +
                    'Beatae distinctio enim excepturi fuga fugiat, nostrum perspiciatis suscipit velit!')}
            </Modal>
        </div>
    );
};






