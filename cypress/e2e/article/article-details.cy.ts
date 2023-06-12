import { cy, describe, beforeEach, afterEach, it } from 'local-cypress'

let currentArticleId = ''

describe('User visits articles details page', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${currentArticleId}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it('And details page loading successfully', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it('And recommendation list loading successfully', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })
    it('And leave an comment (with_stabbed_data)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('TestCommentText')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('And rate this article (with_stabbed_data)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(3, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 3)
    })
})
