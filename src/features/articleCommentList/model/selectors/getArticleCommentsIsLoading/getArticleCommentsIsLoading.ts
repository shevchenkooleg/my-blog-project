import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
