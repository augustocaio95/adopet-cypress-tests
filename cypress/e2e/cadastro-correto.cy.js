
describe("Página de Cadastri", () => {
  
  it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Caio Augusto");
    cy.get('[data-test="input-email"]').type("caio_augusto02@hotmail.com");
    cy.get('[data-test="input-password"]').type("Caio1234");
    cy.get('[data-test="input-confirm-password"]').type("Caio1234");
    cy.get('[data-test="submit-button"]').click();
  });
});
