/// <reference types="cypress" /> 

Cypress.Commands.add('acessaPaginaCadastro', () => {
           
    cy.visit('/')

    cy.get('.right_list_fix > :nth-child(2) > a')
        .click()

    cy.get('#user')
        .should('be.visible')
})

