describe('Click on Place Order button', () => {
    before('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.add_items_in_the_basekt()
        cy.contains('Place Order').click()
    })

    it('Click on the Choose Country drop-down and verify that Select option is disabled', () => {
        // cy.get('.wrapperTwo > div > select').click()
        cy.get('label').should('have.text', 'Choose Country')
        cy.get('select option:first').should('have.text', 'Select')
            .and('be.disabled')

        //Randomly choose a country
        cy.get('.wrapperTwo > div > select').then(($select) => {
            const options = $select.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomOption = options.eq(randomIndex)
            const countryName = randomOption.text()
            cy.log(`Selecting country: ${countryName}`)
            cy.wrap(randomOption).invoke('attr', 'value').then((value) => {
                $select.val(value)
            })

            //Click on Proceed button
            cy.get('button').click()
        })

        //Option Select should be disabled and message “Please accept Terms & Conditions - Required” should be displayed
        cy.get('.errorAlert').should('have.text', 'Please accept Terms & Conditions - Required')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get('select option:first').should('be.disabled')
        cy.screenshot()

    })
})




