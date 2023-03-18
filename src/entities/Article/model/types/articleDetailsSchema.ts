import { type Article } from "./artiicle";

export interface ArticleDetailsSchema {
    isLoading: boolean
    error?: string
    data?: Article
}
