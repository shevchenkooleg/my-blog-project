import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { CommentCard } from './CommentCard';
import { type Comment } from './../../model/types/comment'


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>;

const comment: Comment = {
    id: '1',
    text: 'Comment text',
    user: {
        id: 1,
        avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-dlya-igr.jpg',
        username: 'Admin'
    }
}

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    comment
};

export const Dark = Template.bind({});
Dark.args = {
    comment
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
Loading.decorators = [ThemeDecorator(Theme.DARK)]
