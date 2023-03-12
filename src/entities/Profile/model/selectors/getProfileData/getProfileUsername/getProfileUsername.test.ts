import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileUsername } from "./getProfileUsername";


describe('getProfileUsername.test', () => {
    test('should return userName', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'admin'
                }
            }
        }
        expect(getProfileUsername(state as StateSchema)).toBe('admin')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileUsername(state as StateSchema)).toBe('')
    })
})
