import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

