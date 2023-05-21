import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getArticleDetailsData } from "@/entities/Article";
import { type Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import {
    fetchCommentsByArticleId
} from "../fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getAddCommentFormText } from "@/features/AddCommentForm";


export const addCommentForArticle = createAsyncThunk<Comment, undefined, ThunkConfig<string> >(
    'articleCommentList/addCommentForArticle',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch, extra, getState } = thunkAPI

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())
        const text = getAddCommentFormText(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>(`/comments`, {
                text,
                articleId: article.id,
                userId: userData.id
            })
            if (!response.data) {
                throw new Error()
            }
            dispatch(fetchCommentsByArticleId(article.id))
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
