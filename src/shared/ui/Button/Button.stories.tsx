import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import '../../../app/styles/index.scss'
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Light } from "pages/AboutPage/ui/AboutPage.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary_Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary_Light.args = {
    children: 'Text'
};
Primary_Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Primary_Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary_Dark.args = {
    children: 'Text'
};
Primary_Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear_Light = Template.bind({});
Clear_Light.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};
Clear_Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Clear_Dark = Template.bind({});
Clear_Dark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};
Clear_Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline_Light = Template.bind({});
Outline_Light.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};
Outline_Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outline_Dark = Template.bind({});
Outline_Dark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};
Outline_Dark.decorators = [ThemeDecorator(Theme.DARK)]
