import { getArticleDetailsError } from "entities/Article";
import { type StateSchema } from "app/providers/StoreProvider";

describe('getArticleDetailsError.test', () => {
    test('should return articleError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
                error: 'error',
                data: {}
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toBe('error')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined)
    })
})
