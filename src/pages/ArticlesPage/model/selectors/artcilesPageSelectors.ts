import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) => (state.articlesPage?.isLoading || false)
export const getArticlesPageError = (state: StateSchema) => (state.articlesPage?.error)
export const getArticlesPageLimit = (state: StateSchema) => (state.articlesPage?.limit || 9)
export const getArticlesPagePageNum = (state: StateSchema) => (state.articlesPage?.page || 1)
export const getArticlesPageHasMore = (state: StateSchema) => (state.articlesPage?.hasMore)
export const getArticlesPageIsInit = (state: StateSchema) => (state.articlesPage?._isInit)
