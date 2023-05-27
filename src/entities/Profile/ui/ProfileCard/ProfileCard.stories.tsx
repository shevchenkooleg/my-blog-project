import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ProfileCard } from "./ProfileCard";
import avatar from '@/shared/assets/tests/storybook.png'
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>;

export const Light = Template.bind({});
Light.args = {
    data: {
        firstName: "Олег",
        lastName: "Шевченко",
        age: 35,
        currency: Currency.EUR,
        country: Country.Russia,
        city: "Sochi",
        username: "admin",
        avatar
    }
};

export const Light_ReadOnly = Template.bind({});
Light_ReadOnly.args = {
    readOnly: true,
    data: {
        firstName: "Олег",
        lastName: "Шевченко",
        age: 35,
        currency: Currency.EUR,
        country: Country.Russia,
        city: "Sochi",
        username: "admin",
        avatar
    }
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        firstName: "Олег",
        lastName: "Шевченко",
        age: 35,
        currency: Currency.EUR,
        country: Country.Russia,
        city: "Sochi",
        username: "admin",
        avatar
    }
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK)
]

export const WithError = Template.bind({});
WithError.args = {
    error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
