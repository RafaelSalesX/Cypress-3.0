/// <reference types="cypress" /> 
//Essa linha serve para linkar as funções do cypress.

describe('Pegar texto de elemento', () => {
    it.only('Pegar o texto pelo elemento', () => {
        cy.visit('/')
            .get('.logo > img')

        cy.get('.form-control')
            .type('rafaelsalese.e@gmail.com')
    });

    //Opções de clicks.
    it('click element', () => {
        cy.visit('/')
            .get('.logo > img')

        cy.get('.form-control')
            .type('rafaelsalese.e@gmail.com')

        //click padrão
        cy.get('.clear > .theme-btn-one')
            .click() 

        //double click
            // cy.get('.clear > .theme-btn-one')
            // .dbclick()
           
        //click com botão direito
            // cy.get('.clear > .theme-btn-one')
            // .rightclick() 

        // click por coordenadas
            // cy.get('.clear > .theme-btn-one')
            // .click(100, 100, {force: true}) 

        // simular apertar 'Enter'
            // cy.get('.form-control')
            //.type('rafaelsalese.e@gmail.com{enter}')

        cy.get('.clear > .theme-btn-one')
                .should('be.visible') 
    });

     it.only('Select', () => {
        cy.visit('/')

        cy.get('.col-lg-2 > .footer_one_widget > ul > :nth-child(5)')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')    
    });

    it.only('CheckBox e Radio button', () => {
        cy.visit('/')
        cy.get('.col-lg-2 > .footer_one_widget > ul > :nth-child(4) > a')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        //uncheck não funciona para radiobuttons
        cy.get('#html')
            .check()

    });

});