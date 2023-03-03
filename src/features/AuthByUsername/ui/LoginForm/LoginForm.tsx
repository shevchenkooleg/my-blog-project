import cls from "./LoginForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { type FC } from 'react';
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={`${t('Введите логин')}`} type="text" className={cls.input}/>
            <Input placeholder={`${t('Введите пароль')}`} type="text" className={cls.input}/>
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
