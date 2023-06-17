import { cy } from "local-cypress";

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text)
    cy.getByTestId('AddCommentForm.Button').click()
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            addComment: (text: string) => Chainable<void>
        }
    }
}