describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app")
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Freela")
        cy.get('#amount').type(50)
        cy.get('#date').type("2026-06-26")
        cy.contains('button', "Salvar").click()

        /* Assertion example */
        cy.get("tbody tr td.description").should("have.text", "Freela")
    })

    it('Cadastrar uma saída', () => {
        cy.visit("https://devfinance-agilizei.netlify.app");

        criarTransacao("Cinema", -20);
        // Removi o espaço antes de "Cinema" para a asserção não falhar
        cy.get("tbody tr td.description").should("have.text", "Cinema");
    })
}) // Faltava fechar o describe aqui

/* Criando uma função para abstrair os códigos */

function criarTransacao(descricao, valor) {
    // Removi o () que estava sobrando na linha acima
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao) // Removi o ponto (.) que estava depois do type
    cy.get('#amount').type(valor)
    cy.get('#date').type("2026-06-26")
    cy.contains('button', "Salvar").click()
}