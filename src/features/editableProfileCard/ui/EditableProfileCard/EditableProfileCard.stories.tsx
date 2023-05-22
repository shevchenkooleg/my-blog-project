import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/editableProfileCard/editableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    firstName: "Олег",
                    lastName: "Шевченко",
                    age: 35,
                    currency: Currency.EUR,
                    country: Country.Russia,
                    city: "Sochi",
                    username: "admin"
                }
            }
        })
    ]
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
