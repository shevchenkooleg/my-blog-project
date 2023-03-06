import { createAsyncThunk } from "@reduxjs/toolkit"
import { type User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string> >(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI

        try {
            const response = await extra.api.post<User>('login', authData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
