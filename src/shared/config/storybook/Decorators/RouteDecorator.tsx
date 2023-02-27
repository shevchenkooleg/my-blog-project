import { type Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (Story: Story) =>
    <BrowserRouter>{Story({}, null)}</BrowserRouter>
