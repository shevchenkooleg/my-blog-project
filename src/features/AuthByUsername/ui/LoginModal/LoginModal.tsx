import cls from "./LoginModal.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { type FC } from 'react';
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    element?: HTMLElement
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose, element } = props


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            element={element}
            className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm/>
        </Modal>
    );
};
