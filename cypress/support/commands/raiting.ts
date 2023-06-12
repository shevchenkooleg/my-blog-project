import { cy } from "local-cypress";

export const setRate = (startsCount = 5, feedback = 'default feedback') => {
    cy.getByTestId(`StarRating.${startsCount}`).click()
    cy.getByTestId(`RatingCard.Input`).type(feedback)
    cy.getByTestId('RatingCard.Send').click()
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setRate: (startsCount: number, feedback: string) => Chainable<void>
        }
    }
}
