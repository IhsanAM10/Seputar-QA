/// <reference types= "cypress" />

describe("Login to Swag Labs", () => {
  it("Should login with valid username and password", () => {
    // Open the Swag Labs website
    cy.visit("https://www.saucedemo.com/");

    // Input valid username
    cy.get("[data-test=username]").type("standard_user");

    // Input valid password
    cy.get("[data-test=password]").type("secret_sauce");

    // Click the login button
    cy.get("[data-test=login-button]").click();

    // Assertion to verify successful login
    cy.url().should("include", "/inventory.html");
  });
});
