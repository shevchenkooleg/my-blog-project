import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { ArticleDetailsComments } from './ArticleDetailsComments';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.args = { id: '1' };

export const Dark = Template.bind({});
Dark.args = { id: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK)]
