/// <reference types="cypress" /> 
//Essa linha serve para linkar as funções do cypress.

import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio_valid_data.json')
const user_data_invalid = require('../fixtures/desafio_invalid_data.json')

//const screens = ['desktop', 'iphone-xr', 'iphone-8'] //Validação de tela em vários tamanhos
// screens.forEach(element => {        // Rodar o teste em todas as telas existentes no array 'screens'

    describe('Desafio tela de cadastro', () => { 
        beforeEach('Acessando página de cadastro',() => {

            // if(element != 'desktop'){   //Se não for desktop ele vai rodar de acordo com o celular no Array. 
                // cy.viewport(element)   
            // }

            home_page.acessRegisterPage()
        });
    
        it('Validar campo nome vazio', () => {
            register_page.fillEmail(user_data.email)
            register_page.fillPassword(user_data.password)
            register_page.btnSalvaCadastro()
            register_page.checkMessage('O campo nome deve ser prenchido') 
        })
    
        it('Validar campo e-mail vazio', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmailEmpty('')
            register_page.fillPassword(user_data.password)
            register_page.btnSalvaCadastro()   
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente') 
        })
    
        it('Validar campo e-mail inválido', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmail(user_data_invalid.email)
            register_page.fillPassword(user_data.password)
            register_page.btnSalvaCadastro()        
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente') 
        })
    
        it('Validar campo senha vazio', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmail(user_data.email)
            register_page.fillPasswordEmpty('')
            register_page.btnSalvaCadastro()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos') 
        })
    
        it('Validar campo senha inválido', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmail(user_data.email)
            register_page.fillPasswordInvalid(user_data_invalid.password) // Verifica que o valor digitado corresponde
            register_page.btnSalvaCadastro()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos') 
        })
    
        it('Cadastro realizado com sucesso', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmail(user_data.email)
            register_page.fillPassword(user_data.password)
            register_page.btnSalvaCadastro()
            register_page.checkRegisterSucess(user_data.name)        
        });
    });
// });


