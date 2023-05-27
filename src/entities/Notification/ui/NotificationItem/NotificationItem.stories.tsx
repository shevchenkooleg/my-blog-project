import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    item: {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие"
    }
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие"
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Olive = Template.bind({});
Olive.args = {
    item: {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие"
    }
};
Olive.decorators = [ThemeDecorator(Theme.OLIVE)]
