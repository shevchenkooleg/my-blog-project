import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { userActions, type User } from "entities/User";
import i18n from "../../../../../shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { loginActions } from "../../slice/loginSlice";

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setUserData(response.data))
            thunkAPI.dispatch(loginActions.resetLoginFormData())

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(i18n.t('Неверный логин и/или пароль'))
        }
    }
)
