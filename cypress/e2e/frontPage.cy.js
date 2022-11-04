import TopStories from '../fixtures/TopStories.json'

describe('Front Page', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt', TopStories).wait(1000)
    cy.visit('localhost:3000/')
  })
  it('Has a masthead', () => {
    cy.get('.pageTitle').contains("New New York Times")
  })
  it('Has a section title', () => {
    cy.get('.sectionTitle').contains("Top Stories")
  })
  //article card
  it('story cards from the pulled down data', () => {
    cy.get('.storyCard').should('have.length', 37)
  })
  it('Has a card for a story', () => {
    cy.get('.storyCard').first().contains("Workers Expect Fast Inflation")
  })
  //detail page
  it('can open a story to see more details', () => {
    cy.get('.heroImage').should('not.exist')
    cy.get('.storyTitle').first().click()
    cy.get('.heroImage').should('exist')
  })
  it('can close the story', () => {
    cy.get('.closeButton').should('not.exist')
    cy.get('.storyTitle').first().click()
    cy.get('.closeButton').should('exist')
    cy.get('.closeButton').click()
    cy.get('.heroImage').should('not.exist')
  })
  //sidebar
  it('has a sidebar with links to other sections', () => {
    cy.get('.sideNav').should("exist")
    cy.get('.sectionLink').should('have.length', 20)
  })
  //search bar
  it('has a working search bar', () => {
    cy.get('input').type('example')
    cy.get('.searchButton').click()
    cy.contains('News Results')
  })
  it('has to have something in the search bar', () => {
    cy.get('.searchError').should('not.exist')
    cy.get('.searchButton').click()
    cy.get('.searchError').should('exist')
  })
})

describe('Sad Section', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/magazinerrrrrrrrrrrr.json?api-key=gA6bGsqWRIIqrkLurNZV68Q7jt8HaRPt', 'Section not found: magazinerrrrrrrrrrrr')
    cy.visit('http://localhost:3000/magazinerrrrrrrrrrrr')
  })
  it('Has a masthead', () => {
    cy.get('.pageTitle').contains("New New York Times")
  })
  it('Has an error message', () => {
    cy.get('.sectionError').contains("Whoops")
  })
})