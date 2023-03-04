import cls from "./LoginForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import i18n from "shared/config/i18n/i18n";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation()
    const { className } = props
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const dispatch = useDispatch()
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])
    const onEnterKeyPress = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginClick()
        }
    }, [onLoginClick])

    useEffect(() => {
        window.addEventListener('keydown', onEnterKeyPress)
        return () => { window.removeEventListener('keydown', onEnterKeyPress); }
    }, [onEnterKeyPress])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={i18n.t('Неверный логин и/или пароль')} theme={TextTheme.ERROR}/>}
            <div className={cls.wrapper}>
                <Input
                    placeholder={`${t('Введите логин')}`}
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={`${t('Введите пароль')}`}
                    type="text"
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>
    );
});


LoginForm.displayName = "LoginForm"
