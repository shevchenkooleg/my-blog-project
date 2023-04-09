import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { ArticlePageRecommendations } from './ArticlePageRecommendations';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticlePageRecommendations',
    component: ArticlePageRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlePageRecommendations>;

const Template: ComponentStory<typeof ArticlePageRecommendations> = (args) => <ArticlePageRecommendations {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
