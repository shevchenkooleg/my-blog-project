import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";


export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string> >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI

        const formData = getProfileForm(getState())
        try {
            const response = await extra.api.put<Profile>('/profile', formData)
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
