import { type Story } from "@storybook/react";
import { Suspense } from 'react';



export const SuspenseDecorator = (story: () => Story) => {
    return (
        <Suspense fallback=''>
            {story()}
        </Suspense>
    )
};
