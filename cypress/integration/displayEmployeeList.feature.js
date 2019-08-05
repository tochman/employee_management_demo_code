
describe('index.html', () => {
  it('displays "Hello World"', () => {
    cy.visit('http://localhost:3000');
    cy.get('section[id="header"]')
      .should('contain', 'Employee List')
  });

  it('displays info on 5 employees', () => {
    cy.get('section[id="main"]').within(() => {
      cy.get('li')
        .should('have.length', 5)
    })
  });
});