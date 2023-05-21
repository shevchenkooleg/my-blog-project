import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import withMock from "storybook-addon-mock";

const dataSample = [
    {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие",
        userId: "1"
    },
    {
        id: "2",
        title: "Уведомление 2",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:3000/admin"
    },
    {
        id: "3",
        title: "Уведомление 3",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:3000/admin"
    },
    {
        id: "4",
        title: "Уведомление 4",
        description: "Произошло какое-то событие",
        userId: "1"
    },
    {
        id: "5",
        title: "Уведомление 5",
        description: "Произошло какое-то событие",
        userId: "1"
    },
    {
        id: "6",
        title: "Уведомление 6",
        description: "Произошло какое-то событие",
        userId: "1"
    }
]

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        withMock,
        StoreDecorator({})
    ],
    parameters: {
        mockData: [{
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: dataSample
        }]
    }
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
