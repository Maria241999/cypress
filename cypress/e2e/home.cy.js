describe('template spec', () => {
 /*it('first test', () => {
    cy.visit('http://localhost:3000')
  })
    it('second test', () => {
    cy.visit('https://example.cypress.io')
})
  it('third test', () => {
    cy.visit('http://localhost:3000')
  })*/

  it('xpath test', () => {
    cy.visit('https://example.cypress.io')
   // cy.xpath('//h1').contains("Kitchen Sink")
    cy.xpath('//h1').should('have.text', 'Kitchen Sink');
  });
it.only("the features on the homepage are correct",() => {
  cy.visit('http://localhost:3000')
  cy.get("dt").eq(0).contains("4 Courses")
});

})