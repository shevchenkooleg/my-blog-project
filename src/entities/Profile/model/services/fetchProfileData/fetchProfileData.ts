import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Profile } from "../../types/profile";


export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string> >(
    'profile/fetchUserData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
