describe('Error Handling', () => {

  it('should display an error if user navigates to incorrect url', () => {
    cy.visit("http://localhost:3000/br");

    cy.get('.error-block > img').should('be.visible')
    cy.get('p').should('contain', "Whoops! This page doesn't exist")

    cy.get('img[class="logo"]').should('be.visible')
    cy.get('div[class="buttons"]').should('be.visible')

    cy.get('#favButton').click()
    cy.url().should("eq", "http://localhost:3000/favorites");
  
    cy.get('div[class="buttons"]').should('be.visible')
    cy.get('#browseAll').click()
    cy.url().should("eq", "http://localhost:3000/browse");
  
   
  })

  it('should display an error if no drink is returned from the get request', () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic",
      },
      {
        fixture: '../fixtures/allDrinks'
      }
    );

    cy.visit("http://localhost:3000/browse");

    cy.intercept(
      "GET",
      "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=15106",
      {
        fixture: '../fixtures/badRequest'
      }
    )
    cy.visit("http://localhost:3000/browse");
    cy.get('#15106').click()

    
    cy.get('.error-block > img').should('be.visible')
    cy.get('p').should('contain', "Whoops! Something went wrong")

    cy.get('div[class="buttons"]').should('be.visible')
    cy.get('#favButton').should('be.visible')
    cy.get('#browseAll').click()
    cy.url().should("eq", "http://localhost:3000/browse");

  })
})