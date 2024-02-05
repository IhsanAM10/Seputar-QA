Cypress.Commands.add(
  "loginViaAPI",
  (
    email = Cypress.env("userEmail"),
    password = Cypress.env("userPassword")
  ) => {
    cy.request({
      method: "GET",
      url: "https://the-internet.herokuapp.com/basic_auth",
      auth: {
        username: email,
        password: password,
      },
    }).then((response) => {
      // Cek apakah response nya sesuai dengan yang diharapkan
      expect(response.status).to.eq(200);

      cy.get("p").contains(
        "Congratulations! You must have the proper credentials"
      );
    });
  }
);

describe("basic auth test", () => {
  it("Should log in via API with basic auth", () => {
    cy.loginViaAPI("admin", "admin");
    cy.url().should("include", "/main");
  });
});
