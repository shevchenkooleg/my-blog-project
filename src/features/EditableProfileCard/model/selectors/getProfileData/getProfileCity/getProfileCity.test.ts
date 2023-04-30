import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileCity } from "./getProfileCity";

describe('getProfileCity.test', () => {
    test('should return city', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    city: 'Moscow'
                }
            }
        }
        expect(getProfileCity(state as StateSchema)).toBe('Moscow')
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileCity(state as StateSchema)).toBe('')
    })
})
