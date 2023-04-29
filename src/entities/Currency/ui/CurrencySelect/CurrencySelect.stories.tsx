import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            height: '100vh'
        }}><Story/></div>
    ]
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};


