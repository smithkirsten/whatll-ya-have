describe('DrinkDeets', () => {
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
    cy.visit("http://localhost:3000/browse");
    cy.get('#15106').click()
  })

  it('has the logo', () => {
    cy.get('img[class="logo"]').should('be.visible')
  })

  it('has a favorites button in the header that navs to the favorites page', () => {
    cy.get('div[class="buttons"]').should('be.visible')
      cy.get('#favButton').click()
      cy.url().should("eq", "http://localhost:3000/favorites");
  })

  it('has a browse all button in the header that navs to the browse page', () => {
    cy.get('div[class="buttons"]').should('be.visible')
      cy.get('#browseAll').click()
      cy.url().should("eq", "http://localhost:3000/browse");
  })

  it('should have an image of the drink', () => {
    cy.get('.drink-img').should('have.attr', 'src').should('include', "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg")
  })

  it('should have the drink name', () => {
    cy.get('h1').contains('Apello')
  })

  it('should have a clickable favorite button', () => {
    cy.get('.fav-button').should('be.visible')
    cy.get('.heart').should('be.visible')
  })

  it('should have instructions', () => {
    cy.get('h2').contains('INSTRUCTIONS')
    cy.get('.ingredients > :nth-child(1)').should('contain', 'Orange juice')
    cy.get('.measurements > :nth-child(1)').should('contain', '4 cl')
    cy.get('.ingredients > :nth-child(4)').should('contain', 'Maraschino cherry')
    cy.get('.measurements > :nth-child(4)').should('contain', '1')
    cy.get('.directions > p').should('contain', 'Stirr. Grnish with maraschino cherry.')
  })
})