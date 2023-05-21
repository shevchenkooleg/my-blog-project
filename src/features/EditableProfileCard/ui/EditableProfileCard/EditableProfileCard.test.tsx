import { componentRender } from "@/shared/lib/test/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { type Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { act, screen } from "@testing-library/react";
import { $api } from "@/shared/api/api";


const profile: Profile = {
    id: '1',
    firstName: 'adminFirst',
    lastName: 'adminLast',
    age: 35,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin213'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            error: '',
            form: profile,
            isLoading: false
        },
        user: {
            authData: {
                id: 1,
                username: 'admin'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

beforeEach(() => {
    act(() => { componentRender(<EditableProfileCard id={'1'}/>, options) })
});


describe('EditableProfileCard.test', () => {
    test('Edit mode activated by click on EditBtn', async () => {
        // act(() => { componentRender(<EditableProfileCard id={'1'}/>, options) })
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn')) })
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument()
    })

    test('CancelBtn click erase all changes in the form', async () => {
        // act(() => { componentRender(<EditableProfileCard id={'1'}/>, options) })
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn')) })
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.firstname')) })
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.lastname')) })
        await act(async () => { await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname') })
        await act(async () => { await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname') })
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('firstname')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname')
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn')) })
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
    })

    test('Validation error should be throw', async () => {
        // act(() => { componentRender(<EditableProfileCard id={'1'}/>, options) })
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn')) })
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.firstname')) })
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.lastname')) })
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn')) })
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Should be "PUT" query executed', async () => {
        // act(() => { componentRender(<EditableProfileCard id={'1'}/>, options) })
        const mockPutReq = jest.spyOn($api, 'put')
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn')) })
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.firstname')) })
        await act(async () => { await userEvent.clear(screen.getByTestId('ProfileCard.lastname')) })
        await act(async () => { await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname') })
        await act(async () => { await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname') })
        await act(async () => { await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn')) })
        expect(mockPutReq).toHaveBeenCalled()
    })
})
