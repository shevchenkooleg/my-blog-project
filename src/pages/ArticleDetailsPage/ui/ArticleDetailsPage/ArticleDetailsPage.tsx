import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/ui/Page";
import { ArticleRecommendationsList } from "features/ArticleRecommendationsList/ui/ArticleRecommendationsList";

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <VStack gap={'16'} max>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id}/>
                <ArticleRecommendationsList/>
                <ArticleDetailsComments id={id}/>
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage)
