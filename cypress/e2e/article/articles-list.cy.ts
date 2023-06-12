import { cy, it, describe, beforeEach } from 'local-cypress'

describe('User visits articles page', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit('articles')
        })
    })
    it('And ArticleList loading successfully', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})
