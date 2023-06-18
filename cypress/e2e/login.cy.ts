describe('template spec', () => {
  it('passes', () => {
    // cy.intercept('/', {
    //   body: "<html><body><h1>Hello cypress</h1></body></html>",
    // })
    cy.visit('/')
    cy.contains('Login')
    cy.get('#username').clear()
    cy.get('#username').type('fake@email.com')
    cy.get('#password').clear()
    cy.get('#password').type('MyP@ssw0rd')

    //  Verify that the value has been updated
    cy.get('#username').should('have.value', 'fake@email.com')
    cy.get('#password').should('have.value', 'MyP@ssw0rd')
    cy.get('#submit').click()

    cy.contains('Dashboard')
  })
})
