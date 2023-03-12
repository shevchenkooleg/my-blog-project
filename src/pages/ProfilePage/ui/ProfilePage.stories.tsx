import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from './ProfilePage';
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                firstName: "Олег",
                lastName: "Шевченко",
                age: 35,
                currency: Currency.EUR,
                country: Country.Russia,
                city: "Sochi",
                username: "admin"
            }
        }
    })
]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                firstName: "Олег",
                lastName: "Шевченко",
                age: 35,
                currency: Currency.EUR,
                country: Country.Russia,
                city: "Sochi",
                username: "admin"
            }
        }
    })
]

export const Dark_readOnly = Template.bind({});
Dark_readOnly.args = {};
Dark_readOnly.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                firstName: "Олег",
                lastName: "Шевченко",
                age: 35,
                currency: Currency.EUR,
                country: Country.Russia,
                city: "Sochi",
                username: "admin"
            }
        }
    })
]
