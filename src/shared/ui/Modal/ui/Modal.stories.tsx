import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Modal } from "shared/ui/Modal";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Light = Template.bind({});
Light.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isOpen: true
};

// export const Dark = Template.bind({});
// Dark.args = {
//     children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     isOpen: true
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)]
