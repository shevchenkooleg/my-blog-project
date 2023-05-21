import cls from "./ArticleSortSelectors.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Select, type SelectOption } from "@/shared/ui/Select/Select";
import { useSelector } from "react-redux";
import {
    getArticlesPageFiltersOrder,
    getArticlesPageFiltersSort
} from "../../model/selectors/articlesPageFiltersSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageFiltersActions } from "../../model/slice/articlesPageFiltersSlice";
import { type SortOrder } from "@/shared/types";
import { articlesPageActions } from "@/pages/ArticlesPage/model/slice/articlesPageSlice";
import { ArticleSortField } from "@/entities/Article";

interface ArticleSortSelectorsProps {
    className?: string
    fetchData: () => void
}

export const ArticleSortSelectors = memo((props: ArticleSortSelectorsProps) => {
    const { t } = useTranslation('articles')
    const { className, fetchData } = props
    const dispatch = useAppDispatch()
    const order = useSelector(getArticlesPageFiltersOrder)
    const sort = useSelector(getArticlesPageFiltersSort)

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('по возрастанию')
        },
        {
            value: 'desc',
            content: t('по убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров')
        }
    ], [t])

    const onOrderChange = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageFiltersActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onSortChange = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageFiltersActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticleSortSelectors, {}, [className])}>
            <Select<ArticleSortField>
                className={cls.selector}
                label={t('Сортировать по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onSortChange}
            />
            <Select<SortOrder>
                label={t('направление')}
                options={orderOptions}
                value={order}
                onChange={onOrderChange}
            />
        </div>
    );
});

ArticleSortSelectors.displayName = 'ArticleSortSelectors'
