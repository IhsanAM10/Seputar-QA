/// <reference types="cypress" />

describe("working with inputs", () => {
  it("visit url login", () => {
    cy.clearCookies();
    cy.clearAllLocalStorage();
    cy.visit("http://zero.webappsecurity.com/");
  });

  it("click button sign in", () => {
    cy.get("#signin_button").click();
    cy.url().should("include", "login.html");
  });

  it("try login", () => {
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.login(username, password);
    });

    cy.get("#pay_bills_tab").click();
  });

  it("detail payers", () => {
    const Payee = "#sp_payee";
    const Account = "#sp_account";
    const Amount = "#sp_amount";
    const Date = "#sp_date";
    const Desc = "#sp_description";
    const btnPay = "#pay_saved_payees";

    cy.pay(Payee, Account, Amount, Date, Desc, btnPay);

    // assertion
    cy.get("#alert_content", { timeout: 10000 }).should(
      "contain.text",
      "The payment was successfully submitted."
    );
  });
});
