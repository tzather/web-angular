import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

  visit() {
    cy.visit('/');
    cy.contains('Login');
  }

  fill(username: any, password: any) {
    this.set("#username", username)
    this.set("#password", password)
  }

  verify(username: any, password: any) {
    this.verifyField("#username", username)
    this.verifyField("#password", password)
  }

  public submit() { cy.get('#submit').click() }
}
