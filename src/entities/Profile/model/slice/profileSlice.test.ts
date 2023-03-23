import { type Profile, type ProfileSchema } from "../types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const profileData: Profile = {
    firstName: "Олег",
    lastName: "Шевченко",
    age: 35,
    currency: Currency.EUR,
    country: Country.Russia,
    city: "Sochi",
    username: "admin",
    avatar: "https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%C2%AB%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%B0-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-214923170.jpg"
}
let data: ProfileSchema


describe('profileSlice.test', () => {
    beforeEach(() => {
        data = {
            data: { ...profileData },
            form: { ...profileData },
            isLoading: false,
            error: '',
            readonly: true,
            validateErrors: undefined
        }
    })
    test('setReadOnly test', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true)))
            .toEqual({ readonly: true })
    })
    test('cancelEdit test', () => {
        const newData = { ...data }
        newData.form = { ...profileData, age: 145, username: 'Bla-bla' }
        const state: DeepPartial<ProfileSchema> = newData

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()))
            .toEqual(data)
    })
    test('updateProfile test', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'admin' } }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'Bla-Bla' })
        ))
            .toEqual({ form: { username: 'Bla-Bla' } })
    })
    test('test fetchProfileData service pending', () => {
        const state: DeepPartial<ProfileSchema> = { error: 'Bla-bla', isLoading: false }
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending
        ))
            .toEqual({ error: undefined, isLoading: true })
    })
    test('test fetchProfileData service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, data: {}, form: {} }
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.fulfilled(profileData, '', '1')
        ))
            .toEqual({ isLoading: false, data: profileData, form: profileData })
    })
})
