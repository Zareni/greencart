describe('Test Case 1 - Landing on Home Page', () => {
    it('Opens the browser and navigates to the link', () => {
        cy.visit('/')
        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.verify_elements_on_the_home_page()
        //Maximize browser window
        cy.viewport(1920, 1080)
    })
})


