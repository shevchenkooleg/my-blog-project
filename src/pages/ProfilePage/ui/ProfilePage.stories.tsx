import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { type Profile } from "@/entities/Profile";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Theme } from '@/shared/const/theme';
import withMock from "storybook-addon-mock";

const profile: Profile = {
    username: 'admin',
    city: 'Sochi',
    country: Country.Russia,
    currency: Currency.USD,
    id: '1',
    age: 35,
    firstName: 'Oleg',
    lastName: 'Shevchenko',
    avatar: 'https://i.imgur.com/qw7CV6k.jpg'
}

const mockRating = [{
    rate: 3
}]

const storeData = {
    profile: {
        data: profile,
        form: profile,
        readonly: false,
        isLoading: false,
        error: ''
    },
    user: {
        authData: {
            id: 1,
            username: 'admin'
        }
    }
}
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        withMock,
        StoreDecorator(storeData)
    ],
    parameters: {
        mockData: [{
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: mockRating
        }]
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args}/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK)
]

export const Dark_readOnly = Template.bind({});
Dark_readOnly.args = {};
Dark_readOnly.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ ...storeData, profile: { ...storeData.profile, readonly: true } })
]
