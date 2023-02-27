import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = { className: Theme.LIGHT };
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Dark = Template.bind({});
Dark.args = { className: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK)]
