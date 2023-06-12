import { cy, it, describe, beforeEach, afterEach } from 'local-cypress'

let profileId = ''

describe('User visits profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = String(data.id)
            cy.visit(`profile/${Number(data.id)}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('And ProfilePage loading successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'FirstTest')
    })
    it('And edits profile data', () => {
        const newFirstName = 'NewTextFirst'
        const newLastName = 'NewTextLast'
        cy.updateProfile(newFirstName, newLastName)
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstName)
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName)
    })
})
