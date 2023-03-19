describe('Verify that “Link 1” is not visible until user hovers (Mouse Over) “Hover Over Me First” button', () => {
    it('should verify visibility of Link 1 on hover', () => {
        // Navigate to the webpage
        cy.visit('https://webdriveruniversity.com/Actions/index.html')

        // Assert that the dropdown content is not visible by default
        cy.get('.list-alert').should('not.be.visible')

        // Loop through each Hover Me First button and trigger mouseover event
        cy.get('.hover > .dropbtn').each(($btn, index) => {
            cy.wrap($btn).trigger('mouseover')

            // Verify that the first Link 1 element is visible after each hover --- FAIL
            cy.get('.list-alert').eq(index).should('be.visible')
        })
    })

})
