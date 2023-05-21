import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile } from '@/entities/Profile';
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type ProfileSchema } from '../types/EditableProfileCardSchema';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    validateErrors: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateErrors = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action) => {
                state.isLoading = false
                state.validateErrors = undefined
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
