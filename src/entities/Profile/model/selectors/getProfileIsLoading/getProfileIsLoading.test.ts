import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "entities/Profile";

describe('getProfileIsLoading.test', () => {
    test('should return isLoading field', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toBe(true)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toBe(false)
    })
})
