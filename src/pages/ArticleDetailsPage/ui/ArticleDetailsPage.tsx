import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Подробности о статье')}
        </div>
    );
};

export default memo(ArticleDetailsPage)
