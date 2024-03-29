import cls from "./ArticlePageFilters.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { DynamicModuleLoader, type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageFiltersReducer } from "../../model/slice/articlesPageFiltersSlice";
import { ArticleSortSelectors } from "../ArticleSortSelectors/ArticleSortSelectors";
import { ArticlePageSearchBar } from "../ArticlePageSearchBar/ArticlePageSearchBar";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { ArticleTypeTabs } from "../ArticleTypeTabs/ArticleTypeTabs";
import { fetchArticlesList } from "../../../index";

interface ArticlesSortFormProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPageFilters: articlesPageFiltersReducer
}

export const ArticlePageFilters = memo((props: ArticlesSortFormProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    // TODO 'разобраться со сбросом фильтров и перезапросом списка
    //  статей при уходе со страницы articles page и возвращением обратно'

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelectors fetchData={debouncedFetchData} />
                    <ArticleViewSelector />
                </div>
                <ArticlePageSearchBar fetchData={debouncedFetchData}/>
                <ArticleTypeTabs fetchData={fetchData}/>

            </div>
        </DynamicModuleLoader>
    );
});

ArticlePageFilters.displayName = 'ArticlePageFilters'
