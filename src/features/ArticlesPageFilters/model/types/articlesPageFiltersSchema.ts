import { type ArticleSortField, type ArticleType, type ArticleView } from "entities/Article";
import { type SortOrder } from "shared/types";

export interface ArticlesPageFiltersSchema {
    isLoading: boolean
    error: string
    sort: ArticleSortField
    search: string
    order: SortOrder
    view: ArticleView
    type: ArticleType
}
