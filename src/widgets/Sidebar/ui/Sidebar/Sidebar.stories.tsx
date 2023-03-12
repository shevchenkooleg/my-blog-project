import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            id: 1
        }
    }
})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: 1
            }
        }
    })]


export const Dark_noAuth = Template.bind({});
Dark_noAuth.args = {};
Dark_noAuth.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {}
        }
    })]
