import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState: UserSchema = {
    authData: {
        id: undefined,
        username: undefined
    }

}
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData!.username = action.payload.username
            state.authData!.id = action.payload.id
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = initialState.authData
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
