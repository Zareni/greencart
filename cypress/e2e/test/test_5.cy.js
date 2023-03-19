describe('Click on Place Order button', () => {
    before('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.add_items_in_the_basekt()
    })

    //Clicking on the Place Order button
    it('Click on Place Order button', () => {
        cy.contains('Place Order').click()


        //User should be redirected to the next page and should see Choose Country drop-down and Agree to the Terms & Conditions checkbox
        //User should be redirected to the next page 
        cy.url().should('include', '/country')

        //Agree to the Terms & Conditions checkbox
        cy.get('.chkAgree').should('be.visible')
            .and('be.not.checked')
            .and('have.attr', 'type', 'checkbox')
        // Terms & Conditions checkbox 
        cy.get('a').should('be.visible')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'href', '#/policy')
            .and('have.text', 'Terms & Conditions')
    })
})