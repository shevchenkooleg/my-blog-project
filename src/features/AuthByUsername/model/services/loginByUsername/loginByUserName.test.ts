import axios from 'axios'
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)



describe('loginByUserName.test', () => {
    test('success authorization', async () => {
        const userValue = { username: '123', id: 1 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        console.log(result)
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error authorization', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        console.log(result)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })

    // __________Тесты без использования класса________
    //
    //
    // let dispatch: Dispatch
    // let getState: () => StateSchema
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    //
    // test('success authorization', async () => {
    //     const userValue = { username: '123', id: 1 }
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //     console.log(result)
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })
    //
    // test('error authorization', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //     console.log(result)
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toBe('error')
    // })
})





