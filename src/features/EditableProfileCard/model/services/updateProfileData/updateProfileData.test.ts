import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { updateProfileData } from "./updateProfileData";
import { type Profile } from "entities/Profile";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";

const formData: Profile = {
    id: '1',
    firstName: "Олег",
    lastName: "Шевченко",
    age: 35,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Sochi",
    username: "admin",
    avatar: "https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%C2%AB%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%B0-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-214923170.jpg"
}


describe('updateProfileData.test', () => {
    test('success update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: formData
            }
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ data: formData }))
        const result = await thunk.callThunk('1');
        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(formData)
    })

    test('error update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: formData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...formData, age: -37 }
            }
        })
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
})




