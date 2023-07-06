describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
 /*it('first test', () => {
    cy.visit('http://localhost:3000')
  })
    it('second test', () => {
    cy.visit('https://example.cypress.io')
})
  it('third test', () => {
    cy.visit('http://localhost:3000')
  })
  
  it('xpath test', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//h1').contains("Kitchen Sink")
    cy.xpath('//h1').should('have.text', 'Kitchen Sink');
  });
    it.only("the features on the homepage are correct",() => {
    cy.visit('http://localhost:3000')
    cy.get("dt").eq(0).contains("4 Courses")
});
  */

  it("allows users to subcribe to the email list", () => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already subscribed email addresses", () => {
    cy.getByData("email-input").type("mari@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address")
  })



})