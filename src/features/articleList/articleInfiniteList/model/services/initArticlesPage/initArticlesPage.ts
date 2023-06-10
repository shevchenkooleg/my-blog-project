import { getArticlesPageIsInit } from "../../selectors/artcilesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import {
    getArticlesPageFiltersPageView,
    articlesPageFiltersActions
} from "../../../../index";
import { type SortOrder } from "@/shared/types/sort";
import { type ArticleSortField, type ArticleType } from "@/entities/Article";


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


