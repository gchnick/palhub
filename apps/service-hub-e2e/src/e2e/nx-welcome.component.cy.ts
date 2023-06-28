describe('service-hub', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('api-nx-welcome').should('exist');
  });
});
