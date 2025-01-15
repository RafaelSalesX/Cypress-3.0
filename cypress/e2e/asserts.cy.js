/// <reference types="cypress" /> 
//Essa linha serve para linkar as funções do cypress.

describe('Asserts', () => {
    it.only('Verificar se elemento está visível', () => {
        cy.visit('/')
            .get('.logo > img')

        cy.get('.right_list_fix > :nth-child(1) > a')
            .click() 

        cy.get('.account_form')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')

        cy.get('.account_form > h3')
        .then((element) => {
            expect(element.text()).equal('Login') 
            expect(element).to.be.visible
            expect(element).not.disabled
        })

    });

});