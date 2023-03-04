describe('DrinkDeets', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=15106",
      {
        fixture: '../fixtures/allDrinks'
      }
    )
    cy.visit("http://localhost:3000/drink/15106");
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
   
  })
  it('should have the drink name', () => {
   
  })
  it('should have an image of the drink', () => {
   
  })
  it('should have a clickable favorite button', () => {
   
  })
  it('should have instructions', () => {
   
  })
})