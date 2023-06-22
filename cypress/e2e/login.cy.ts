import { DashboardPage } from "./page/dashboard/dashboardPage";
import { LoginPage } from "./page/loginPage";

describe('template spec', () => {
  it('passes', () => {
    // cy.intercept('/', {
    //   body: "<html><body><h1>Hello cypress</h1></body></html>",
    // })
    let loginPage = new LoginPage();
    let dashboardPage = new DashboardPage();

    loginPage.visit();
    loginPage.fill("fake@email.com", "MyP@ssw0rd")
    loginPage.verify("fake@email.com", "MyP@ssw0rd")
    loginPage.submit();

    dashboardPage.verifyPage();
  })
})
