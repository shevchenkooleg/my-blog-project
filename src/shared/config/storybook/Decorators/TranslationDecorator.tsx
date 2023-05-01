import { type Story } from "@storybook/react";
import { Suspense } from 'react';



export const TranslationDecorator = (StoryComponent: Story) => {
    return (
        <Suspense fallback=''>
            <StoryComponent />
        </Suspense>
    )
};
