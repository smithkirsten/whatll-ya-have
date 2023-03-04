describe('Browse Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic',
      {
        fixture: '../fixtures/allDrinks'
      }
    )
  })
  it('has the logo', () => {
    cy.visit('https://example.cypress.io')
  })
})