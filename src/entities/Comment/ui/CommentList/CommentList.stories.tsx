import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { CommentList } from './CommentList';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>;

const commentList = [
    {
        id: '1',
        text: 'Comment_text_1',
        user: {
            id: 1,
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-dlya-igr.jpg',
            username: 'Admin'
        }
    },
    {
        id: '2',
        text: 'Comment_text_2',
        user: {
            id: 1,
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-dlya-igr.jpg',
            username: 'Admin'
        }
    },
    {
        id: '3',
        text: 'Comment_text_3',
        user: {
            id: 2,
            avatar: 'https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%C2%AB%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%B0-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-214923170.jpg',
            username: 'User'
        }
    }
]

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    comments: commentList
};

export const Dark_Loading = Template.bind({});
Dark_Loading.args = {
    comments: commentList,
    isLoading: true
};
Dark_Loading.decorators = [ThemeDecorator(Theme.DARK)]

export const Olive_Empty = Template.bind({});
Olive_Empty.args = {
    comments: []
};
Olive_Empty.decorators = [ThemeDecorator(Theme.OLIVE)]
