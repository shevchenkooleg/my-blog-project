import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { ArticlePageSearchBar } from './ArticlePageSearchBar';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/articleList/ArticlePageFilters/ArticlePageSearchBar',
    component: ArticlePageSearchBar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlePageSearchBar>;

const Template: ComponentStory<typeof ArticlePageSearchBar> = (args) => <ArticlePageSearchBar {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
