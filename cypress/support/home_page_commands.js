/// <reference types="cypress" /> 

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessaPaginaCadastro', () => {
           
    cy.visit('/')

    cy.get('.right_list_fix > :nth-child(2) > a')
        .click()

    cy.get('#user')
        .should('be.visible')
})

