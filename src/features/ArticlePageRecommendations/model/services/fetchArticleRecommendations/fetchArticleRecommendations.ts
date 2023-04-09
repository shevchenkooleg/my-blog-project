import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Article } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";


export const fetchArticleRecommendations =
    createAsyncThunk<Article[], void, ThunkConfig<string> >(
        'articlesPage/fetchArticleRecommendations',
        async (props, thunkAPI) => {
            const { rejectWithValue, extra } = thunkAPI

            try {
                addQueryParams({
                })
                const response = await extra.api.get<Article[]>(`/articles`, {
                    params: {
                        _limit: 4,
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
