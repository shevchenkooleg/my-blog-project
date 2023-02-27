import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
};
export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
};
