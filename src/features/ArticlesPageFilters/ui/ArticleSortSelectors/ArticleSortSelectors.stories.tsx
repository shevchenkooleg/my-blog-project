import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleSortSelectors } from './ArticleSortSelectors';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticlePageFilters/ArticleSortSelectors',
    component: ArticleSortSelectors,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleSortSelectors>;

const Template: ComponentStory<typeof ArticleSortSelectors> = (args) => <ArticleSortSelectors {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
