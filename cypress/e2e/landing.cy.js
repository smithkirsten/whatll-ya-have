describe('Landing Page', () => {
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

  it('has the logo', () => {

  })

  it('displays reason in header', () => {

  })

  it('displays problem to solve', () => {

  })

  it('displays button to nav user to browse', () => {
    
  })
})