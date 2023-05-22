import { type Profile } from "@/entities/Profile";

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
