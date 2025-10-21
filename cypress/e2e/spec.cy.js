// Início do bloco de testes
describe("template spec", () => {
  // Define um caso de teste com o nome 'passes'
  it("passes", () => {
    // 1️⃣ Acessa o site indicado — abre a URL no navegador de teste
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    // 2️⃣ Procura um elemento 'a' (link) que contenha o texto 'Cadastrar' e clica nele
    // Isso geralmente leva para a página de cadastro
    cy.contains("a", "Cadastrar").click();

    // 3️⃣ Localiza o campo de input cujo atributo name="nome" e digita "Caio Augusto"
    cy.get('input[name="nome"]').type("Caio Augusto");

    // 4️⃣ Localiza o campo de input name="email" e digita o e-mail informado
    cy.get('input[name="email"]').type("caio_augusto02@hotmail.com");

    // 5️⃣ Localiza o campo name="password" e digita a senha
    cy.get('input[name="password"]').type("Caio1234");

    // 6️⃣ Localiza o campo name="confirm_password" e digita novamente a senha
    cy.get('input[name="confirm_password"]').type("Caio1234");

    // 7️⃣ Procura um botão (elemento <button>) que contenha o texto 'Cadastrar' e clica nele
    // Isso envia o formulário de cadastro
    cy.contains("button", "Cadastrar").click();
  });
});
