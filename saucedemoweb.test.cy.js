/// <reference types="cypress" />

describe("SauceDemo Test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Should sfill username", () => {
    cy.get('input[name="user-name"]').clear();
    cy.get('input[name="user-name"]').type("standard_user");
  });

  it("Should fill password", () => {
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type("secret_sauce");
  });

  it("Should try to login completed", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "inventory.html");
  });

  it("Should add a product to the shopping cart", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Pilih produk dan tambahkan ke keranjang
    cy.get(".inventory_item:first-child").find(".btn_inventory").click();
    cy.get("#shopping_cart_container").click();

    // Produk ditambahkan ke keranjang
    cy.get(".cart_item").should("have.length", 1);
  });

  it("Should complete the checkout process", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Pilih produk dan tambahkan ke keranjang
    cy.get(".inventory_item:first-child").find(".btn_inventory").click();
    cy.get("#shopping_cart_container").click();

    cy.get("#checkout").click();

    // Isi informasi checkout
    cy.get("#first-name").type("Ihsan");
    cy.get("#last-name").type("Ahnaf");
    cy.get("#postal-code").type("1004");
    cy.get("#continue").click();

    // Verifikasi ringkasan pembelian dan selesaikan pembayaran
    cy.get(".summary_info").should("be.visible");
    cy.get("#finish").click();
    cy.url().should("include", "checkout-complete.html");
  });
});
