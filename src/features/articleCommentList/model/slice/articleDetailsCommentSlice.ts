import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Comment } from "@/entities/Comment";
import { type StateSchema } from "@/app/providers/StoreProvider";
import { type ArticleDetailsCommentSchema } from "../types/articleDetailsCommentSchema";
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';



const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        error: '',
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice
