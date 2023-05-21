import { type StateSchema } from "@/app/providers/StoreProvider";
import { getProfileAvatar } from "./getProfileAvatar";

describe('getProfileAvatar.test', () => {
    test('should return avatar', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    avatar: 'avatar'
                }
            }
        }
        expect(getProfileAvatar(state as StateSchema)).toBe('avatar')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileAvatar(state as StateSchema)).toBe('')
    })
})
