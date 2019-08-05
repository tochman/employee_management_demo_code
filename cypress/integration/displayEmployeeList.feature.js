
describe('index.html', () => {
  it('displays "Hello World"', () => {
    cy.visit('http://localhost:3000');
    cy.get('body').should('contain', 'Hello World')
  });
});