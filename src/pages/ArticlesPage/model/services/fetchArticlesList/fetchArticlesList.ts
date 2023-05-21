import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { ArticleType, type Article } from "@/entities/Article";
import { getArticlesPageLimit, getArticlesPagePageNum } from "../../selectors/artcilesPageSelectors";
import { type FetchArticlesListPayload } from "../../slice/articlesPageSlice";
import {
    getArticlesPageFiltersOrder,
    getArticlesPageFiltersPageView,
    getArticlesPageFiltersSearch,
    getArticlesPageFiltersSort
} from "@/features/ArticlesPageFilters";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";
import {
    getArticlesPageFiltersType
} from "@/features/ArticlesPageFilters/model/selectors/articlesPageFiltersSelectors";

interface FetchArticlesListProps {
    replace?: boolean
}


export const fetchArticlesList =
    createAsyncThunk<FetchArticlesListPayload, FetchArticlesListProps, ThunkConfig<string> >(
        'articlesPage/fetchArticlesList',
        async (props, thunkAPI) => {
            const { rejectWithValue, extra, getState } = thunkAPI
            const limit = getArticlesPageLimit(getState())
            const view = getArticlesPageFiltersPageView(getState())
            const order = getArticlesPageFiltersOrder(getState())
            const search = getArticlesPageFiltersSearch(getState())
            const sort = getArticlesPageFiltersSort(getState())
            const page = getArticlesPagePageNum(getState()) ?? 1
            const type = getArticlesPageFiltersType(getState())

            try {
                addQueryParams({
                    sort, order, search, type
                })
                const response = await extra.api.get<Article[]>(`/articles`, {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _order: order,
                        _sort: sort,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type
                    }
                })
                if (!response.data) {
                    throw new Error()
                }
                return { data: response.data, view }
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
