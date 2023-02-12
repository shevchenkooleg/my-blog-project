import cls from "./PageError.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import React, { type FC } from 'react';
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ErrorPageProps {
    className?: string
}

export const PageError: FC<ErrorPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }


    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
