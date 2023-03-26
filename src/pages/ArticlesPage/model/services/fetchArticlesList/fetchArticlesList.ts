import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Article } from "entities/Article";


export const fetchArticlesList = createAsyncThunk<Article[], undefined, ThunkConfig<string> >(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user'
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
