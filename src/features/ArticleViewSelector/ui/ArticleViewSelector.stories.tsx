import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from "entities/Article";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    view: ArticleView.BIG
};

export const Dark = Template.bind({});
Dark.args = {
    view: ArticleView.BIG
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
