import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePageNum
} from "../../selectors/artcilesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";


export const fetchNextArticlePage = createAsyncThunk<void, undefined, ThunkConfig<string> >(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const hasMore = getArticlesPageHasMore(getState())
        const isLoading = getArticlesPageIsLoading(getState())
        const page = getArticlesPagePageNum(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1))
            dispatch(fetchArticlesList({
                page: page + 1
            }))
        }
    }
)
