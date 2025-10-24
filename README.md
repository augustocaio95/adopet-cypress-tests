
# 🧪 Testes End-to-End com Cypress - Adopet

Este repositório contém testes automatizados end-to-end desenvolvidos com [Cypress](https://www.cypress.io/) para validar funcionalidades das páginas de **cadastro** e **login** da aplicação web [Adopet](https://adopet-frontend-cypress.vercel.app).

## 📋 Funcionalidades testadas

### ✅ Cadastro
- **Cadastro bem-sucedido**: Preenchimento correto dos campos e envio do formulário.
- **Cadastro com erros**: Validação de mensagens de erro ao enviar o formulário vazio.

### 🔐 Login
- **Login bem-sucedido**: Autenticação com credenciais válidas.
- **Login com erros**: Validação de mensagens de erro com credenciais inválidas.

## 🚀 Como executar os testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/augustocaio95/adopet-cypress-tests.git
  
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes:
   ```bash
   npx cypress open
   ```
   ou em modo headless:
   ```bash
   npx cypress run
   ```

## 🧰 Estrutura dos testes

Os testes estão organizados por página:

- `cadastro.spec.js`
  - Testa o fluxo de cadastro com dados válidos.
  - Testa o envio do formulário vazio e valida mensagens de erro.

- `login.spec.js`
  - Testa o login com credenciais válidas.
  - Testa o login com credenciais inválidas e valida mensagens de erro.

## 👨‍💻 Autor

**Caio Augusto Santos**  
Quality Inspector | Estudante de QA e Desenvolvimento  
Sorocaba, SP
