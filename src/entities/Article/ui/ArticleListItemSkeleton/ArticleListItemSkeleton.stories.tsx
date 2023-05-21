import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from "../../model/consts/consts";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    view: ArticleView.SMALL
};

export const Primary_Big = Template.bind({});
Primary_Big.args = {
    view: ArticleView.BIG
};

export const Dark = Template.bind({});
Dark.args = {
    view: ArticleView.SMALL
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Big = Template.bind({});
Dark_Big.args = {
    view: ArticleView.BIG
};
Dark_Big.decorators = [ThemeDecorator(Theme.DARK)]

export const Olive = Template.bind({});
Olive.args = {
    view: ArticleView.SMALL
};
Olive.decorators = [ThemeDecorator(Theme.OLIVE)]

export const Olive_Big = Template.bind({});
Olive_Big.args = {
    view: ArticleView.BIG
};
Olive_Big.decorators = [ThemeDecorator(Theme.OLIVE)]
