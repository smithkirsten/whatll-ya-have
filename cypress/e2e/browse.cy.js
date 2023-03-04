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
  })

  it('has the logo', () => {
    cy.get('img[class="logo"]').should('be.visible')
  })

  it('has a favorites button in the header that navs to the favorites page', () => {
    cy.get('div[class="buttons"]').should('be.visible')
      cy.get('#favButton').click()
      cy.url().should("eq", "http://localhost:3000/favorites");
  })

  it('displays all drink cards', () => {
    cy.get('.drink-card').should('have.length', 5)
    cy.get('.drink-image').eq(0).should('have.css', 'background-image', 'url("https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg")')
    //hover function?????
  })

  it('should bring the user to the correct details page when drink card is clicked', () => {
    cy.get('.drink-card').eq(1).click()
    cy.url().should("eq", "http://localhost:3000/drink/12562");
    cy.get('div[class="drink"]').contains("Alice Cocktail")
  })
})