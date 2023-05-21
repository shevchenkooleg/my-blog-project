import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => {
    return state.articleDetails?.data
}
