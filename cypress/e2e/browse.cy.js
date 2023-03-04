describe('Browse Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic',
      {
        fixture: '../fixtures/allDrinks'
      }
    )
    cy.visit("http://localhost:3000/");
  })
  it('has the logo in the header', () => {

  })
  it('has a favorites button in the header')
})