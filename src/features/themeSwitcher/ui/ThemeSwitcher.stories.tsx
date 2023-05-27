import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/themeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
