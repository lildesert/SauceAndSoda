describe('Sauce and Soda testing', function() {
  it('loads homepage', function() {
    cy.visit('/')
    cy.contains('SauceAndSoda').click()
    cy.screenshot('homepage')
  })
})
