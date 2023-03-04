describe('Browse Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic',
      {
        fixture: '../fixtures/allDrinks'
      }
    )
    cy.visit("http://localhost:3000/browse");
    cy.intercept(
      "GET",
      "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=15106",
      {
        fixture: '../fixtures/apello'
      }
    )
    cy.get('#15106').click()
    cy.get('.fav-button').click()
    cy.get('#favButton').click()
  })

  it('should have the correct url', () => {
    cy.url().should("eq", "http://localhost:3000/favorites");
  })

  it('has the logo', () => {
    cy.get('img[class="logo"]').should('be.visible')
  })

  it('has a browse all button in the header that navs to the browse page', () => {
    cy.get('div[class="buttons"]').should('be.visible')
    cy.get('#browseAll').click()
    cy.url().should("eq", "http://localhost:3000/browse");
  })

  it('should have only the favorited drink in the display', () => {
    cy.get('.drink-card').should('have.length', 1)
    cy.get('#15106').should('be.visible')
  })
})