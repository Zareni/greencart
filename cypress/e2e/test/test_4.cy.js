describe('Click on Apply button', () => {
    before('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.add_items_in_the_basket_and_enter_total_amount_in_the_Promo_code()
    })
    //Clicking on the Apply button
    it('Click on Apply button', () => {
        cy.screenshot()
        cy.get('.promoBtn').should('be.enabled')
            .and('have.text', 'Apply')
            .and('be.visible').click()
        cy.screenshot()


        //Error message should be displayed
        cy.get('.promoInfo').should('have.text', 'Invalid code ..!')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and('be.visible')
        cy.screenshot()
    })
})