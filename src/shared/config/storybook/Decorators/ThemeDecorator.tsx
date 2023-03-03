import { type Story } from "@storybook/react";
import { type Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <StoryComponent/>
            </div>
        </ThemeProvider>
    )
}
