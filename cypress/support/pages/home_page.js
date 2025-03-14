/// <reference types="cypress" /> 

export default{
    acessRegisterPage(){
        cy.visit('/')

        cy.get('.right_list_fix > :nth-child(2) > a')
            .click()
    
        cy.get('#user')
            .should('be.visible')
    }

}


