import { Cypress } from 'local-cypress'
// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/react18'
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
        }
    }
}

Cypress.Commands.add('mount', mount)
