import { BasePage } from "../basePage";

export class DashboardPage extends BasePage {

  verifyPage() { cy.contains('Dashboard') }
}
