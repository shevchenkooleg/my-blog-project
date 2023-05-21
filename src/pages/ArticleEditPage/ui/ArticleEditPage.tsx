import cls from "./ArticleEditPage.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "@/widgets/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)


    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Редактирование статьи с ID ') + String(id) : t('Создание новой статьи')}
        </Page>
    );
};

export default memo(ArticleEditPage)
