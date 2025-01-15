describe('Pegar texto de elemento', () => {
    it('Pegar o texto pelo elemento', () => {
        cy.visit('/')
            .get('.logo > img')

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
        })
    });
});