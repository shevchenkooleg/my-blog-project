import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from "../types/articlesPageSchema";
import { type StateSchema } from "@/app/providers/StoreProvider";
import { type Article, ArticleView } from "@/entities/Article";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { PAGE_SCROLL_VARIABLE_BIG_VIEW, PAGE_SCROLL_VARIABLE_SMALL_VIEW } from "@/shared/const/common";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

export interface FetchArticlesListPayload {
    data: Article[]
    view: ArticleView
}

export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        error: '',
        isLoading: false,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _isInit: false
    }),
    reducers: {
        initState: (state, action: PayloadAction<ArticleView>) => {
            state.limit = action.payload === ArticleView.SMALL
                ? PAGE_SCROLL_VARIABLE_SMALL_VIEW
                : PAGE_SCROLL_VARIABLE_BIG_VIEW
            state._isInit = true
        },
        setPage: (state, action: PayloadAction<number>) => {
            console.log('setPage action.payload', action.payload)
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (
                state,
                action
            ) => {
                state.error = undefined
                state.isLoading = true
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload.data)

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload.data)
                } else {
                    articlesAdapter.addMany(state, action.payload.data)
                }

                if (action.payload.view === ArticleView.SMALL) {
                    state.hasMore = action.payload.data.length > PAGE_SCROLL_VARIABLE_SMALL_VIEW - 1
                } else {
                    state.hasMore = action.payload.data.length > PAGE_SCROLL_VARIABLE_BIG_VIEW - 1
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const {
    actions: articlesPageActions,
    reducer: articlesPageReducer
} = articlesPageSlice
