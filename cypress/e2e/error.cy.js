describe('Error Handling', () => {

  it('should display an error if user navigates to incorrect url', () => {
    cy.visit("http://localhost:3000/br");

  })

  it('should display an error if there is an issue with the get request on landing', () => {

  })

  it('should display an error if no drink is returned from the get request', () => {})

  it('', () => {})

})