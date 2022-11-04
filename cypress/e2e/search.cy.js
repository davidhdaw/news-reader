import SearchResults from '../fixtures/SearchResults.json'
import BadSearchResults from '../fixtures/BadSearchResults.json'

describe('happy search', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=The%20Internet&api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt', SearchResults)
    cy.visit('http://localhost:3000/search/The%20Internet')
  })
  it('Has a masthead', () => {
    cy.get('.pageTitle').contains("New New York Times")
  })
  it('Has a results title', () => {
    cy.get('.resultsHeader').contains("News Results for:")
  })
  it('story cards from the pulled down data', () => {
    cy.get('.searchCard').should('have.length', 10)
  })
  it('Has a card for a story', () => {
    cy.get('.storyLink').first().contains("Cringe")
  })
})

describe('sad Search', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=asdfazdraser&api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt', BadSearchResults)
    cy.visit('http://localhost:3000/search/asdfazdraser')
  })
  it('Has a masthead', () => {
    cy.get('.pageTitle').contains("New New York Times")
  })
  it('Has an error message', () => {
    cy.get('.errorMessage').contains("Oops")
  })
})