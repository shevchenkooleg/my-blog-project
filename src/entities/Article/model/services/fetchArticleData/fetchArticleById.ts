import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { type Article } from "../../types/article";


export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string> >(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            if (!articleId) {
                throw new Error('ArticleId not defined')
            }
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            })
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
