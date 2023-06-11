import { cy, it, describe, beforeEach } from 'local-cypress'
import { selectByTestId } from "../../helpers/selectByTestId";

describe('User NOT authorized', () => {
    it('Try to open Main Page', () => {
        cy.visit('/')
        cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Try to open ProfilePage and redirect to the Main Page', () => {
        cy.visit('/profile/1')
        cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Try to open wrong route', () => {
        cy.visit('/ewwgewbgkw')
        cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
})

describe('User authorized', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Try to open ProfilePage', () => {
        cy.visit('/profile/1')
        cy.get(selectByTestId('ProfilePage')).should('exist')
    })
    it('Try to open ArticlesPage', () => {
        cy.visit('/articles')
        cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
})
