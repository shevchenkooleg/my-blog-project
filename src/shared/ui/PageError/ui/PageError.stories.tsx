import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { PageError } from "shared/ui/PageError";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
