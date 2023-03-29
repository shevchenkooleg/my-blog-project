import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/artcilesPageSelectors";

interface FetchArticlesListProps {
    page?: number
}


export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string> >(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const { page = 1 } = props
        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
                }
            })
            console.log(response)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
