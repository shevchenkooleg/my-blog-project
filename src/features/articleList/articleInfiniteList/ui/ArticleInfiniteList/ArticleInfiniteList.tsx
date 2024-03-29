import { memo } from "react";
import { ArticleList } from "@/entities/Article";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slice/articlesPageSlice";
import { getArticlesPageError, getArticlesPageIsLoading } from "../../model/selectors/artcilesPageSelectors";
import { Text } from '@/shared/ui/Text'
import { useTranslation } from "react-i18next";
import { getArticlesPageFiltersPageView } from "../../../index";

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageFiltersPageView)
    const error = useSelector(getArticlesPageError)
    const { t } = useTranslation('articles')

    if (error) {
        return (
            <Text text={t('Ошибка загрузки данных')}/>
        )
    }

    return (
        <ArticleList
            view={view}
            isLoading={isLoading}
            articles={articles}
        />
    );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList'
