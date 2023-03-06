import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import LoginForm from './LoginForm';



// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({
    loginForm: { username: 'UseName', password: 'password' }
})]

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'UseName', password: 'password' }
    })]

export const Error = Template.bind({});
Error.args = {
};
Error.decorators = [
    StoreDecorator({
        loginForm: { username: 'UseName', password: 'password', error: 'Some error' }
    })]

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true }
    })]

