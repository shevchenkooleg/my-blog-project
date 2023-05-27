import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { LangSwitcher } from "./LangSwitcher";
import { Theme } from '@/shared/const/theme';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/langSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
