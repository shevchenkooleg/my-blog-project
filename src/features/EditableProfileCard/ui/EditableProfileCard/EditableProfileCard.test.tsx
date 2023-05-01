import { componentRender } from "shared/lib/test/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { type Profile } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { $api } from "shared/api/api";


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


describe('EditableProfileCard.test', () => {
    test('Edit mode activated by click on EditBtn', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument()
    })

    test('CancelBtn click erase all changes in the form', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname')
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('firstname')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'))
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
    })

    test('Validation error should be throw', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Should be "PUT" query executed', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'}/>, options)
        expect(screen.getByTestId('EditableProfileCardHeader.EditBtn')).toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.lastname')).toBeInTheDocument()
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('adminFirst')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('adminLast')

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))
        expect(mockPutReq).toHaveBeenCalled()
    })
})
