import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AboutPage from "./AboutPage";
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage/>;

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
