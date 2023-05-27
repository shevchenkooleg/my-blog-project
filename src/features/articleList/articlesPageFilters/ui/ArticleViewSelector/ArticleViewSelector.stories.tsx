import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { ArticleViewSelector } from './ArticleViewSelector';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticlePageFilters/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
