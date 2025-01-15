/// <reference types="cypress" /> 
//Essa linha serve para linkar as funções do cypress.

import { faker } from '@faker-js/faker';
//Para utilizar dados que se alteram a cada teste (email,nome,senha etc)

describe('Desafio tela de cadastro', () => { 

    beforeEach('Acessando página de cadastro',() => {
    cy.acessaPaginaCadastro()
    });
    
const user_data = require('../fixtures/desafio_valid_data.json')
const user_data_invalid = require('../fixtures/desafio_invalid_data.json')

    it('Validar campo nome vazio', () => {
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.btnSalvaCadastro()
        cy.checkMessage('O campo nome deve ser prenchido') 
    })

    it('Validar campo e-mail vazio', () => {
        cy.fillName(user_data.name)
        cy.get('#email')
            .should('be.empty')

        cy.fillPassword(user_data.password)
        cy.btnSalvaCadastro()   
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente') 
    })

    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data_invalid.email)
        cy.fillPassword(user_data.password)
        cy.btnSalvaCadastro()        
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente') 
    })

    it('Validar campo senha vazio', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.get('#password')
            .should('be.empty')

        cy.btnSalvaCadastro()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos') 
    })

    it('Validar campo senha inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data_invalid.password) // Verifica que o valor digitado corresponde
            .and(($value) => {
            expect($value).to.have.length.lessThan(6); // Valida que a senha tem menos de 6 caracteres
            });
        
        cy.btnSalvaCadastro()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos') 
    })

    it('Cadastro realizado com sucesso', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.btnSalvaCadastro()
        cy.checkRegisterSucess(user_data.name)        
    });
});
