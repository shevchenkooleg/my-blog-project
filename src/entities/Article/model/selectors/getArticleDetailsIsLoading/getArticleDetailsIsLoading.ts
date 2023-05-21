import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsIsLoading = (state: StateSchema) => {
    return state.articleDetails?.isLoading
}
