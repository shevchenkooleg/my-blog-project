import { addDecorator } from '@storybook/react'
import { RouterDecorator } from '../../src/shared/config/storybook/Decorators/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { SuspenseDecorator } from '../../src/shared/config/storybook/Decorators/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
