describe('testing', () => {
   /* beforeEach(() => {
        cy.visit('http://localhost:3000')
      });
    it.only("allows users to describe to the email list",() => {
      cy.fixture("practica").then(user => {
        const email = user.email
        const new_d = user.new_data
        console.log(new_d)
        homePage.suscribeForUpdates("email")
        homePage.elements.successMessage().should("exist").contains(email)
      })
    });*/
    
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.fixture('practica').as("info")
      })
      it.only("allows users to describe to the email list",() => {
        cy.get('@info').then((info) => {
            console.log(info.email)
          })
    })
      
    })