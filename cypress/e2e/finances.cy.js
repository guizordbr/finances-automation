describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
    cy.visit ("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click ()
    cy.get('#description').type("Freela")
    cy.get('#amount').type(50)
    cy.get('#date').type ("2026-06-26")

                
    });
});
