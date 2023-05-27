import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Theme } from "@/shared/const/theme";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: () => {}
};
Primary.decorators = [StoreDecorator({
    addCommentForm: {
        text: 'Comment text',
        error: '',
        isLoading: false
    }
})]

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: () => {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    addCommentForm: {
        text: 'Comment text',
        error: '',
        isLoading: false
    }
})]
