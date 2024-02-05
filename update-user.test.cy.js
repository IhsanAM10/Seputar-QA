describe("update user", () => {
  it("Succesfully update user", () => {
    var user = {
      name: "ihsan",
      job: "QA Enginner",
    };
    cy.request("PUT", "https://reqres.in/api/users/2", user).then(
      (response) => {
        expect(response.status).equal(200);
        expect(response.body.name).to.eq(user.name);
      }
    );
  });
});

const response = {
  abilitiy: [
    {
      ability: {
        name: "limber",
        url: "https://pokeapi.co/api/v2/ability/7/",
      },
    },
  ],
};

// Mengekstrak nilai yang ingin diuji dari respons API
const abilityName = response.abilitiy[0].ability.name;
const abilityUrl = response.abilitiy[0].ability.url;

// Melakukan validasi menggunakan expect
// Misalnya, menguji apakah nama kemampuan sama dengan yang diharapkan
expect(abilityName).to.eq("limber");

// Atau menguji apakah URL kemampuan sama dengan yang diharapkan
expect(abilityUrl).to.eq("https://pokeapi.co/api/v2/ability/7/");
