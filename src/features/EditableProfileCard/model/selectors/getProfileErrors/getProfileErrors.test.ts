import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileErrors } from "./getProfileErrors";

describe('getProfileErrors.test', () => {
    test('should return errors field', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'some error'
            }
        }
        expect(getProfileErrors(state as StateSchema)).toBe('some error')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileErrors(state as StateSchema)).toBe('')
    })
})
