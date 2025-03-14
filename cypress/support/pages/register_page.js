/// <reference types="cypress" /> 

//Elementos 

const elements = {
    buttons: {
        btnRegister: '#btnRegister'
    },

    fields: {
        name:'#user',
        email:'#email',
        password:'#password',
    }

}

export default{
// Ações/Métodos/Funções

btnSalvaCadastro(){
    cy.get(elements.buttons.btnRegister)
    .click()
},

fillName(name){
    cy.get(elements.fields.name)
    .type(name)
    .should('have.value', name)
},

fillEmail(email){
    cy.get(elements.fields.email)
    .type(email)
    .should('have.value', email)
},

fillEmailEmpty(email){
    cy.get(elements.fields.email)
    .should('be.empty')
},

fillPassword(password){
    cy.get(elements.fields.password)
    .type(password)
    .should('have.value', password)
},

fillPasswordEmpty(password){
    cy.get(elements.fields.password)
    .should('be.empty')
},

fillPasswordInvalid(password){
    cy.get(elements.fields.password)
    .and(($value) => {
    expect($value).to.have.length.lessThan(6); // Valida que a senha tem menos de 6 caracteres
    });
},

checkMessage(message){
    cy.get('#errorMessageFirstName')
    .should('be.visible')
    .then((element) => {
        expect(element.text()).equal(message) 
    })
},


checkRegisterSucess(name){
    cy.get('.swal2-popup')   
    //Necessário o uso de aspas invertidas por conta da interpolação de variáveis``   
    .contains(`Cadastro realizado!Bem-vindo ${name}`);  
}
}
