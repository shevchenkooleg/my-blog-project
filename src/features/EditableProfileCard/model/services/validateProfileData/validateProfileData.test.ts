import { validateProfileData } from "./validateProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { type Profile } from "@/entities/Profile";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";

let profileData: Profile


describe('validateProfileData.test', () => {
    beforeEach(() => {
        profileData = {
            firstName: "Олег",
            lastName: "Шевченко",
            age: 35,
            currency: Currency.EUR,
            country: Country.Russia,
            city: "Sochi",
            username: "admin",
            avatar: "https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%C2%AB%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%B0-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-214923170.jpg"
        }
    })
    test('all data valid, should return an empty array', () => {
        expect(validateProfileData(profileData)).toEqual([])
    })
    test('without first name', () => {
        profileData.firstName = ''
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
    test('without last name', () => {
        profileData.lastName = ''
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
    test('with negative age', () => {
        profileData.age = -17
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('with zero age', () => {
        profileData.age = 0
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('with incorrect age', () => {
        profileData.age = NaN
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('with incorrect username', () => {
        profileData.username = ''
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_USER_NAME])
    })
    test('with username length < 4 characters', () => {
        profileData.username = 'Ad'
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_USER_NAME])
    })
    test('with incorrect country', () => {
        profileData.country = undefined
        expect(validateProfileData(profileData)).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })
    test('with incorrect country, age anf first name', () => {
        profileData.country = undefined
        profileData.age = -31
        profileData.firstName = ''
        expect(validateProfileData(profileData)).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
    test('with empty profile data', () => {
        expect(validateProfileData(undefined)).toEqual([ValidateProfileError.NO_DATA])
    })
})




