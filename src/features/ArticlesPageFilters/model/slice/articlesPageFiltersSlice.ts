import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticlesPageFiltersSchema } from "../types/articlesPageFiltersSchema";
import { type SortOrder } from "@/shared/types";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

const initialState: ArticlesPageFiltersSchema = {
    isLoading: false,
    error: '',
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
    view: ArticleView.SMALL,
    type: ArticleType.ALL
}

export const articlesPageFiltersSlice = createSlice({
    name: 'articlesPageFiltersSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(articlesPageActions.initState, (state) => {
                const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
                state.view = view
            })
        // .addCase(loginByUsername.fulfilled, (state) => {
        //    state.isLoading = false
        // })
        // .addCase(loginByUsername.rejected, (state, action) => {
        //    state.isLoading = false
        //    state.error = action.payload
        // })
    }
})

// Action creators are generated for each case reducer function
export const { actions: articlesPageFiltersActions } = articlesPageFiltersSlice
export const { reducer: articlesPageFiltersReducer } = articlesPageFiltersSlice
