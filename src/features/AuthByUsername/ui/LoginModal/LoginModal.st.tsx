import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { LoginModal } from "features/AuthByUsername";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args}/>;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Adipisci alias animi asperiores commodi culpa, dolorem iure maxime quis vel voluptates.' +
        ' Dignissimos dolore dolores exercitationem praesentium provident quia recusandae vero. Vel!',
    element: document.getElementById('popper-root')
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
