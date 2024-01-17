/// <reference types="cypress" />

describe("Working with inputs", () => {
  it("Visit the website", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.url().should("include", "v1");
  });

  it("Should fill username", () => {
    cy.get('input[name="user-name"]').clear();
    cy.get('input[name="user-name"]').type("standard_user");
  });

  it("Should fill password", () => {
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type("secret_sauce");
  });

  Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('input[name="user-name"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
  });

  it("Should try to login", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get('input[type="submit"]').click(); // Verify successful login
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });
});
