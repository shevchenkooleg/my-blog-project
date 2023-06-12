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
    it('(The_same_using_stubbed_data)_And ArticleList loading successfully', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
    it.skip('And have an error cause we supply incorrect data-testid ', () => {
        cy.getByTestId('fwqfefsdf').should('exist')
    })
})
