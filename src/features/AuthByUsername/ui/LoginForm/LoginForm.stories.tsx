import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import { LoginForm } from "features/AuthByUsername/ui/LoginForm/LoginForm";


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
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};
Light.decorators = [StoreDecorator({
    loginForm: { username: 'UseName', password: 'password' }
})]

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'UseName', password: 'password' }
    })]

export const Error = Template.bind({});
Error.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};
Error.decorators = [
    StoreDecorator({
        loginForm: { username: 'UseName', password: 'password', error: 'Some error' }
    })]

export const Loading = Template.bind({});
Loading.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true }
    })]

