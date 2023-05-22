import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "@/app/providers/ThemeProvider";
import { RatingCard } from './RatingCard';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        title: 'Как вам статья?',
        feedbackTitle: 'Оставьте отзыв о статье',
        hasFeedback: true
    }
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Olive = Template.bind({});
Olive.args = {};
Olive.decorators = [ThemeDecorator(Theme.OLIVE)]
