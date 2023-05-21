import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            articleDetailsComments: {
                ids: ['1', '2', '3'],
                entities: {
                    1: {
                        id: "1",
                        text: "some comment 1",
                        user: {
                            id: 1,
                            username: "admin",
                            avatar: "https://i.imgur.com/qw7CV6k.jpg"
                        }
                    },
                    2: {
                        id: "1",
                        text: "some comment 2",
                        user: {
                            id: 1,
                            username: "admin",
                            avatar: "https://i.imgur.com/qw7CV6k.jpg"
                        }
                    },
                    3: {
                        id: "1",
                        text: "some comment 3",
                        user: {
                            id: 1,
                            username: "admin",
                            avatar: "https://i.imgur.com/qw7CV6k.jpg"
                        }
                    }
                },
                isLoading: false,
                error: ''
            }
        })
    ]
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.args = { id: '1' };

export const Dark = Template.bind({});
Dark.args = { id: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK)]
