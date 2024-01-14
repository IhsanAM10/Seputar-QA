/// <reference types="cypress" />

describe("My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io");
    cy.pause();
    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it, and verify that the value has been updated
    cy.get(".action-email")
      .should("be.visible") // Memastikan bahwa elemen input terlihat sebelum mengetik
      .type("ihsan@gmail.com")
      .should("have.value", "ihsan@gmail.com");
  });
});
