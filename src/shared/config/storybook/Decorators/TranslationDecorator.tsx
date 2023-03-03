import { type Story } from "@storybook/react";
import { Suspense } from 'react';



export const TranslationDecorator = (story: () => Story) => {
    return (
        <Suspense fallback=''>
            {story()}
        </Suspense>
    )
};
