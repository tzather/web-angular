export class BasePage {

  get(field: any) { return cy.get(field); }

  set(field: any, val: any) {
    cy.get(field).clear()
    cy.get(field).type(val)
  }

  verifyField(field: any, val: any) { cy.get(field).should('have.value', val) }
}
