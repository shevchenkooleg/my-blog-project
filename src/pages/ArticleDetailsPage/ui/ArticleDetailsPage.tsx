import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};

export default memo(ArticleDetailsPage)
