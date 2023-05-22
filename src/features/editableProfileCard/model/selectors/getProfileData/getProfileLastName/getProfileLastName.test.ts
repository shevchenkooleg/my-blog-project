import { type StateSchema } from "@/app/providers/StoreProvider";
import { getProfileLastName } from "./getProfileLastName";

describe('getProfileLastName.test', () => {
    test('should return last name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    lastName: 'Shevchenko'
                }
            }
        }
        expect(getProfileLastName(state as StateSchema)).toBe('Shevchenko')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLastName(state as StateSchema)).toBe('')
    })
})
