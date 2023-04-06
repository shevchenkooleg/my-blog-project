import { getArticlesPageIsInit } from "pages/ArticlesPage/model/selectors/artcilesPageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slice/articlesPageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { getArticlesPageFiltersPageView } from "features/ArticlesPageFilters";
import { articlesPageFiltersActions } from "features/ArticlesPageFilters/model/slice/articlesPageFiltersSlice";
import { type SortOrder } from "shared/types";
import { type ArticleSortField, type ArticleType } from "entities/Article/model/types/article";


export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string> >(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const isInit = getArticlesPageIsInit(getState())
        const view = getArticlesPageFiltersPageView(getState())
        if (!isInit) {
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ArticleSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if (orderFromUrl) {
                dispatch(articlesPageFiltersActions.setOrder(orderFromUrl))
            }
            if (sortFromUrl) {
                dispatch(articlesPageFiltersActions.setSort(sortFromUrl))
            }
            if (searchFromUrl) {
                dispatch(articlesPageFiltersActions.setSearch(searchFromUrl))
            }
            if (typeFromUrl) {
                dispatch(articlesPageFiltersActions.setType(typeFromUrl))
            }

            dispatch(articlesPageActions.initState(view))
            dispatch(fetchArticlesList({}))
        }
    }
)


