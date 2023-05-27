import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { ArticlePageFilters } from './ArticlePageFilters';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/articleList/ArticlePageFilters/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
