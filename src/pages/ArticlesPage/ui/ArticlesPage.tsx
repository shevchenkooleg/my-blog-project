import cls from "./ArticlesPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('Статьи')}
        </div>
    );
};

export default memo(ArticlesPage)
