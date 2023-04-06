import cls from "./ArticlePageSearchBar.module.scss"
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { Card } from "shared/ui/Card/Card";
import { useSelector } from "react-redux";
import { getArticlesPageFiltersSearch } from "../../model/selectors/articlesPageFiltersSelectors";
import { articlesPageFiltersActions } from "../../model/slice/articlesPageFiltersSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";

interface ArticlePageSearchBarProps {
    className?: string
    fetchData: () => void
}

export const ArticlePageSearchBar = memo((props: ArticlePageSearchBarProps) => {
    const { fetchData } = props
    const { t } = useTranslation('articles')
    const search = useSelector(getArticlesPageFiltersSearch)
    const dispatch = useAppDispatch()

    const onSearchChange = useCallback((value: string) => {
        dispatch(articlesPageFiltersActions.setSearch(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <Card className={cls.search}>
            <Input value={search} placeholder={t('Поиск')} onChange={onSearchChange}/>
        </Card>
    );
});

ArticlePageSearchBar.displayName = 'ArticlePageSearchBar'
