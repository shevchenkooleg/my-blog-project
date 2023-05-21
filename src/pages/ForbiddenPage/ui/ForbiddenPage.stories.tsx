import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import ForbidenPage from './ForbiddenPage';



// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ForbiddenPage',
    component: ForbidenPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ForbidenPage>;

const Template: ComponentStory<typeof ForbidenPage> = (args) => <ForbidenPage/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
