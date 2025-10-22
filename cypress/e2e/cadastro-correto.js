describe("Página de Cadastro", () => {
  it("Deve preencher os campos do formulário corretamente para cadastrr um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Cadastrar").click();
    cy.get('input[name="nome"]').type("Caio Augusto");
    cy.get('input[name="email"]').type("caio_augusto02@hotmail.com");
    cy.get('input[name="password"]').type("Caio1234");
    cy.get('input[name="confirm_password"]').type("Caio1234");
    cy.contains("button", "Cadastrar").click();
  });
});
