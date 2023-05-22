import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            profile: {
                readonly: false
            }
        })
    ]
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args}/>;

export const Normal = Template.bind({});
Normal.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {};
ReadOnly.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        readonly: true
    }
})]
