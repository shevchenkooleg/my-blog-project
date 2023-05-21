import { type StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsIsLoading } from "./getArticleDetailsIsLoading";

describe('getArticleDetailsIsLoading.test', () => {
    test('should return articleIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                error: 'error',
                data: {}
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(undefined)
    })
})
