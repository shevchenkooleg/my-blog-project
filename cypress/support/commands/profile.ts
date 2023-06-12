import { cy } from "local-cypress";

export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastName)
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'testtesttest' },
        body: {
            id: "4",
            firstName: "FirstTest",
            lastName: "LastTest",
            age: 36,
            currency: "RUB",
            country: "Russia",
            city: "Sochi",
            username: "testuser",
            avatar: "https://api-private.atlassian.com/users/d10ed8b13f08fbadbdbb9162a1c21a6e/avata"
        }
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile: (firstName: string, lastName: string) => Chainable<void>
            resetProfile: (profileId: string) => Chainable<void>
        }
    }
}
