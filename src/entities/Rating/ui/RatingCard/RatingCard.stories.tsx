import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
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
Primary.args = { title: 'Заголовок рейтинга' };

export const RatedDark = Template.bind({});
RatedDark.args = { rate: 3 };
RatedDark.decorators = [ThemeDecorator(Theme.DARK)]
