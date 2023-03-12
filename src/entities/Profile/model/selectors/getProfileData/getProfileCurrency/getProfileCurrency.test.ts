import { type StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { getProfileCurrency } from "./getProfileCurrency";

describe('getProfileCurrency.test', () => {
    test('should return currency', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    currency: Currency.EUR
                }
            }
        }
        expect(getProfileCurrency(state as StateSchema)).toBe(Currency.EUR)
    })
    test('must return with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileCurrency(state as StateSchema)).toBe(Currency.RUB)
    })
})
