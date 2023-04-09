import { type StateSchema } from "app/providers/StoreProvider";

export const getArticlePageRecommendationIsLoading = (state: StateSchema) =>
    (state.articleDetailsRecommendations?.isLoading)
export const getArticlePageRecommendationError = (state: StateSchema) => state.articleDetailsRecommendations?.error
