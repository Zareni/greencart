
describe('User should be able to open browser on Contact Us page', () => {
    it('User should be able to open browser on Contact Us page', () => {
        // User should be able to open browser on Contact Us page
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        // Enter text in the comments textarea
        cy.get('textarea.feedback-input').type('Well done you clicked on the link!')

    })
})

