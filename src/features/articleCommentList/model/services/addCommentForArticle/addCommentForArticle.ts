import { type ThunkConfig } from "@/app/providers/StoreProvider"
import { getArticleDetailsData } from "@/entities/Article"
import { getUserAuthData } from "@/entities/User"
// TODO
// eslint-disable-next-line path-import-validation-plugin/layer-imports
import { getAddCommentFormText } from "@/features/addCommentForm"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId"



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
