import { type StateSchema } from "@/app/providers/StoreProvider";
import { getProfileFirstName } from "./getProfileFirstName";

describe('getProfileFirstName.test', () => {
    test('should return first name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    firstName: 'Oleg'
                }
            }
        }
        expect(getProfileFirstName(state as StateSchema)).toBe('Oleg')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileFirstName(state as StateSchema)).toBe('')
    })
})
