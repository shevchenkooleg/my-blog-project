import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from "app/providers/StoreProvider";
import { type Article } from 'entities/Article';
import { type ArticlePageRecommendationsSchema } from "../types/ArticlePageRecommendationsSchema";
import {
    fetchArticleRecommendations
} from "../services/fetchArticleRecommendations/fetchArticleRecommendations";


const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id
})

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationAdapter.getInitialState()
)

const articlePageRecommendationsSlice = createSlice({
    name: 'articlePageRecommendationSlice',
    initialState: recommendationAdapter.getInitialState<ArticlePageRecommendationsSchema>({
        error: '',
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action: PayloadAction<Article[]>) => {
                state.isLoading = false
                recommendationAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articlePageRecommendationReducer } = articlePageRecommendationsSlice
