import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import withMock from "storybook-addon-mock";
import ProfileRating from './ProfileRating';
import { Theme } from '@/shared/const/theme';

const mockRating = [{
    rate: 3
}]

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock, StoreDecorator({})],
    parameters: {
        mockData: [{
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: mockRating
        }]
    }
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [{
        url: `${__API__}/profile-ratings?userId=1&profileId=2`,
        method: 'GET',
        status: 200,
        response: []
    }]
}

export const OliveRated = Template.bind({});
OliveRated.args = {};
OliveRated.decorators = [ThemeDecorator(Theme.OLIVE)]
