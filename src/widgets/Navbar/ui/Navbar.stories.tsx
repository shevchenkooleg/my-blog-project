import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Navbar } from "widgets/Navbar";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
