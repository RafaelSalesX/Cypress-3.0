/// <reference types="cypress" /> 

Cypress.Commands.add('btnSalvaCadastro', () => {
    cy.get('#btnRegister')
    .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
    .type(name)
    .should('have.value', name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
    .type(email)
    .should('have.value', email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
    .type(password)
    .should('have.value', password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get('#errorMessageFirstName')
    .should('be.visible')
    .then((element) => {
        expect(element.text()).equal(message) 
    })
})

Cypress.Commands.add('checkRegisterSucess', (name) => {
    cy.get('.swal2-popup')   
    //Necessário o uso de aspas invertidas por conta da interpolação de variáveis``   
    .contains(`Cadastro realizado!Bem-vindo ${name}`);  
})


