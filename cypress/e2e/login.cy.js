describe('Testa a funcionalidade de Login', () => {

  it('Login com sucesso', () => {
    //get(Seleciona elementos)
      cy.visit('/')
          .get('.logo > img')

    //contains() - para encontrar elementos por texto
    //geralmente diminuimos o escopo com um get()
      cy.get('#top_header').as('teste')
          .contains('Login')
    
    //find() para encontrar elementos
    //geralmente diminuimos o escopo com um get()
      cy.get('#top_header')
          .find('.fa-user')

      //as()  -alias renomeia um elemento
      //usado para elementos complexos
      cy.get('@teste')
          .find('.fa-user')

  })

})