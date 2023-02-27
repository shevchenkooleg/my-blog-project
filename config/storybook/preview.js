import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/Decorators/SuspenseDecorator'
import { RouteDecorator } from '../../src/shared/config/storybook/Decorators/RouteDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    themes: {
        default: 'Light theme',
        list: [
            { name: 'Light theme', class: 'light', color: '#bbb' },
            { name: 'Dark theme', class: 'dark', color: 'rgb(1 39 87)' }
        ]
    }
}


addDecorator(StyleDecorator)
addDecorator(SuspenseDecorator)
addDecorator(RouteDecorator)
