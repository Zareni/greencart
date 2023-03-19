describe('should close all tabs and exit the browser', () => {

    after(() => {
        cy.window().then(win => win.close())
    })
    it('should close all tabs and exit the browser', () => {
        // Visit the initial page
        cy.visit('/')

        // Get a reference to the current window and open a new tab
        cy.window().then(win => {
            window.open('https://webdriveruniversity.com/', '_blank')

            // Close the new tab
            window.close()
        })
    })
})

