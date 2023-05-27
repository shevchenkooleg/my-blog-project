import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import withMock from "storybook-addon-mock";
import { Theme } from "@/shared/const/theme";

const mockRating = [{
    rate: 4
}]

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock, StoreDecorator({})],
    parameters: {
        mockData: [{
            url: `${__API__}/article-ratings?userId=2`,
            method: 'GET',
            status: 200,
            response: mockRating
        }]
    }
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [{
        url: `${__API__}/article-ratings?userId=2`,
        method: 'GET',
        status: 200,
        response: []
    }]
}

export const DarkRated = Template.bind({});
DarkRated.args = {};
DarkRated.decorators = [ThemeDecorator(Theme.DARK)]
