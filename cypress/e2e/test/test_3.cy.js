describe('Enter a promo code (for the promo code number use the Total Amount number)', () => {

    before('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.add_items_in_the_basekt()
    })

    it('Entering Total amount in the Promo code', () => {
        cy.get('.totAmt').then(($totalAmt) => {
            const totalAmtText = $totalAmt.text()
            const totalAmtNum = parseFloat(totalAmtText.replace('$', ''))

            // Create the promo code using the total amount number
            const promoCode = `${totalAmtNum}`

            // Enter the promo code
            cy.get('.promoCode').type(promoCode)
        })
        cy.screenshot()
    })
})