import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { type Profile } from "../../types/profile";

const responseValue: Profile = {
    firstName: "Олег",
    lastName: "Шевченко",
    age: 35,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Sochi",
    username: "admin",
    avatar: "https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%C2%AB%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%B0-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-214923170.jpg"
}


describe('fetchProfileData.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: responseValue }))
        const result = await thunk.callThunk('1');

        console.log(result)
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        console.log(result)
        expect(result.meta.requestStatus).toBe('rejected')
    })
})




