import { getProfileAge } from "./getProfileAge";
import { type StateSchema } from "@/app/providers/StoreProvider";

describe('getProfileAge.test', () => {
    test('should return age', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: { age: 31 }
            }
        }
        expect(getProfileAge(state as StateSchema)).toBe(31)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileAge(state as StateSchema)).toBe(undefined)
    })
})
