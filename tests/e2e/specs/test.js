describe('Página Inicial', () => {
  it('Visitando a página inicial', () => {
    cy.visit('/');
    cy.contains('span', 'Pela: He4rt Developers');
  });
});
