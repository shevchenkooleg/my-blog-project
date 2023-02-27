import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { PageLoader } from "widgets/PageLoader";



// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
