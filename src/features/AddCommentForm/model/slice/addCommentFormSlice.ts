import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    text: ''
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText (state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(sendComment.pending, (state) => {
        //         console.log('pending')
        //         state.error = undefined
        //         state.isLoading = true
        //     })
        //     .addCase(sendComment.fulfilled, (state) => {
        //         console.log('fulfilled')
        //         state.isLoading = false
        //         state.text = ''
        //     })
        //     .addCase(sendComment.rejected, (state, action) => {
        //         state.isLoading = false
        //         state.error = action.payload
        //     })
    }
})

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice




