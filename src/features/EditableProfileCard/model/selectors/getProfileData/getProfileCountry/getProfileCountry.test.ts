import { type StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { getProfileCountry } from "./getProfileCountry";

describe('getProfileCountry.test', () => {
    test('should return country', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    country: Country.Russia
                }
            }
        }
        expect(getProfileCountry(state as StateSchema)).toBe(Country.Russia)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileCountry(state as StateSchema)).toBe(Country.Russia)
    })
})
