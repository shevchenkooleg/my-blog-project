import { Suspense } from "react";
import { type Story } from "@storybook/react";

export const SuspenseDecorator = (Story: Story) =>
    <Suspense fallback={''}>{Story({}, null)}</Suspense>
