import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';



// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Button',
    component: Button,
    // id: 'app.light',
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE
};
