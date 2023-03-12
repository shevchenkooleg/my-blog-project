import { type Profile, ValidateProfileError } from "../../types/profile";


export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { username, firstName, lastName, age, country } = profile
    const errors = []

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (age && age < 1) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }

    if (!username || username?.length < 3) {
        errors.push(ValidateProfileError.INCORRECT_USER_NAME)
    }

    return errors
}
