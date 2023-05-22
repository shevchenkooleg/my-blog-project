import cls from "./ArticleDetailsPage.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/ui/Page";
import {
    ArticleRecommendationsList
} from "@/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList";

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <VStack gap={'16'} max>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id}/>
                <ArticleRating articleId={String(id)}/>
                <ArticleRecommendationsList/>
                <ArticleDetailsComments id={id}/>
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage)
