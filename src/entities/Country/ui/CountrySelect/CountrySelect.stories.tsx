import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { CountrySelect } from "./CountrySelect";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}><Story/></div>
    ]
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};


