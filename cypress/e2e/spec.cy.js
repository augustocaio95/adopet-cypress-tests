describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Cadastrar").click();
    cy.get('input[name="nome"]').type("Caio Augusto");
    cy.get('input[name="email"]').type("caio_augusto02@hotmail.com");
    cy.get('input[name="password"]').type("Caio1234");
    cy.get('input[name="confirm_password"]').type("Caio1234");
    cy.contains("button", "Cadastrar").click();
  });
});
