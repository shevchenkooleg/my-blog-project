import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Text_Light = Template.bind({});
Text_Light.args = {
    title: 'Some example title',
    text: 'Description Description Description Description'
};

export const Text_Dark = Template.bind({});
Text_Dark.args = {
    title: 'Some example title',
    text: 'Description Description Description Description'
};
Text_Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Text_Light_Error = Template.bind({});

Text_Light_Error.args = {
    title: 'Some example title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR
};

export const Text_Dark_Error = Template.bind({});
Text_Dark_Error.args = {
    title: 'Some example title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR
};
Text_Dark_Error.decorators = [ThemeDecorator(Theme.DARK)];

export const Only_Title = Template.bind({});
Only_Title.args = {
    title: 'Some example title'
};

export const Only_Text = Template.bind({});
Only_Text.args = {
    text: 'Some example text'
};

export const Only_Title_Dark = Template.bind({});
Only_Title_Dark.args = {
    title: 'Some example title'
};
Only_Title_Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Only_Text_Dark = Template.bind({});
Only_Text_Dark.args = {
    text: 'Some example text'
};
Only_Text_Dark.decorators = [ThemeDecorator(Theme.DARK)];
