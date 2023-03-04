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
    cy.get('img[class="logo"]').should('be.visible')
  })

  it('displays reason in header', () => {
    cy.get('p[class="reason"]').should('contain', 'there are so many reasons to kick alcohol to the curb')
  })

  it('displays problem to solve', () => {
    cy.get('div[class="pitch"]').should('contain', 'but you still need a signature drink')
  })

  it('displays button to nav user to browse', () => {
    cy.get('button[class="enter-button"')
      .should('be.visible')
      .click()
    cy.url().should("eq", "http://localhost:3000/browse");
  })
})