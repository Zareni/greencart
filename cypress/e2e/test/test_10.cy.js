describe('', () => {
  it('Should open a new tab and navigate to the Actions page', () => {
    cy.visit('https://webdriveruniversity.com')

    cy.url().should('eq', 'https://webdriveruniversity.com/')

    // Scroll down to Actions and take a screenshot
    cy.get('#actions').should('be.visible')
    cy.get('#actions').scrollIntoView().screenshot()
    cy.wait(1000)

    // Click on Actions User should open Actions page in new tab
    cy.get('#actions').click()
  })
})

