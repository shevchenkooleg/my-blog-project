import { type StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export const getArticlesPageFiltersPageView = (state: StateSchema) => (
    state.articlesPageFilters?.view || ArticleView.SMALL
)
export const getArticlesPageFiltersOrder = (state: StateSchema) => (state.articlesPageFilters?.order ?? 'asc')
export const getArticlesPageFiltersSort = (state: StateSchema) => (
    state.articlesPageFilters?.sort ?? ArticleSortField.CREATED
)
export const getArticlesPageFiltersSearch = (state: StateSchema) => (state.articlesPageFilters?.search ?? '')
export const getArticlesPageFiltersType = (state: StateSchema) => (state.articlesPageFilters?.type ?? ArticleType.ALL)
