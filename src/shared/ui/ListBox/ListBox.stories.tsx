import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { ListBox } from './ListBox';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>;

const dataSample = {
    defaultValue: 'defaultValue',
    onChange: () => {},
    items: [
        { value: 'active_1', content: 'active_1', disabled: false },
        { value: 'disabled_2', content: 'disabled', disabled: true },
        { value: 'active_3', content: 'active_3', disabled: false }
    ]
}


export const Primary = Template.bind({});
Primary.args = dataSample;

export const Dark = Template.bind({});
Dark.args = { ...dataSample, label: 'This is ListBox label' };
Dark.decorators = [ThemeDecorator(Theme.DARK)]
