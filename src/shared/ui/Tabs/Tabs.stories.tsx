import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { Tabs } from './Tabs';
import { action } from "@storybook/addon-actions";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1'
        },
        {
            value: 'tab 2',
            content: 'tab 2'
        },
        {
            value: 'tab 3',
            content: 'tab 3'
        }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1'
        },
        {
            value: 'tab 2',
            content: 'tab 2'
        },
        {
            value: 'tab 3',
            content: 'tab 3'
        }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
