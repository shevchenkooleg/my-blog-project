import cls from "./ArticleTypeTabs.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { type TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { useSelector } from "react-redux";
import { getArticlesPageFiltersType } from "../../model/selectors/articlesPageFiltersSelectors";
import { articlesPageFiltersActions } from "../../model/slice/articlesPageFiltersSlice";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleType } from "entities/Article";

interface ArticleTypeTabsProps {
    className?: string
    fetchData: () => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation()
    const { className, fetchData } = props
    const dispatch = useAppDispatch()

    const type = useSelector(getArticlesPageFiltersType)
    const onTabClickHandler = (tab: TabItem<ArticleType>) => {
        dispatch(articlesPageFiltersActions.setType(tab.value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.ECONOMIC,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t])

    return (
        <Tabs
            tabs={typeTabs}
            value={type}
            onTabClick={onTabClickHandler}
            className={classNames(cls.ArticleTypeTabs, {}, [className])}
        />
    );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs'
