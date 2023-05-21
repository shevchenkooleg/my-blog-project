import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsError = (state: StateSchema) => {
    return state.articleDetails?.error
}
