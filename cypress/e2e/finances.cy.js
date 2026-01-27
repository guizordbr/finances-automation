


describe('Transações', () => {

    //* Criando um hook - executar uma ação antes de cada teste *//
    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app")
    });

    it('Cadastrar uma entrada', () => {
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Freela")
        cy.get('#amount').type(50)
        cy.get('#date').type("2026-06-26")
        cy.contains('button', "Salvar").click()
        /* Assertion example */
        cy.get("tbody tr td.description").should("have.text", "Freela")
    })

    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -20);
        cy.get("tbody tr td.description").should("have.text", "Cinema");
  
    })

    it('Excluir uma transação', () => {
        criarTransacao("Freela", 50)
        criarTransacao("Mesada", 100)

        cy.contains(".description", "Mesada")
            .parent()
            .find("img")
            .click()
    })

}) 

/* Criando uma função para abstrair os códigos */

function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao) 
    cy.get('#amount').type(valor)
    cy.get('#date').type("2026-06-26")
    cy.contains('button', "Salvar").click()
}

