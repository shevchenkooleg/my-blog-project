import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text'
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    children: 'Text'
};
Primary_Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};

export const Clear_Dark = Template.bind({});
Clear_Dark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};
Clear_Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};

export const Outline_Dark = Template.bind({});
Outline_Dark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};
Outline_Dark.decorators = [ThemeDecorator(Theme.DARK)]
