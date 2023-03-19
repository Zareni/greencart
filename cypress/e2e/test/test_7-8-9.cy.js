//Check Terms & Conditions checkbox and click on Proceed button
describe('Check Terms & Conditions checkbox and click on Proceed button', () => {

    it('Check Terms & Conditions checkbox', () => {
        cy.visit('/')
        cy.url().should('eq', Cypress.config().baseUrl)
        cy.add_items_in_the_basekt()
        cy.contains('Place Order').click()

        //Agree to the Terms & Conditions checkbox
        cy.get('.chkAgree').click()
        cy.get('.chkAgree').should('be.checked')
            .and('have.attr', 'type', 'checkbox')
        cy.screenshot()
        //Click on Proceed button
        cy.get('button').should('have.text', 'Proceed').click()
        cy.screenshot()
        //Appropriate message that order is successful placed should be displayed
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
        cy.get('a').should('have.attr', 'href', '#/').and('have.text', 'Home').screenshot()
        cy.url().should('include', '/')
        cy.url().should('eq', Cypress.config().baseUrl)
        cy.screenshot()
        // Open a new tab and navigate to the URL
        cy.log('Opening new tab')
        cy.visit('https://webdriveruniversity.com/')
        cy.window().then(win => {
            win.open('https://webdriveruniversity.com/', '_blank')
        })
        // 1. Scroll down to Actions and take a screenshot 
        //2. Click on Actions to open new page
        cy.log('Skrolujemo do elementa sa tekstom ACTION...')
        cy.get('body').then($body => {
            if ($body.find('#actions').length) {
                cy.get('body').then($body => {
                    if ($body.find('#actions').length) {
                        cy.get('#actions').should('be.visible')
                        cy.get('#actions').scrollIntoView()
                        cy.wait(1000)
                        cy.get('#actions').click()
                    }
                })
            }
        })

        // User should be navigated to Actions page
        cy.url().should('include', 'https://webdriveruniversity.com')

        // Take a screenshot of the second tab
        cy.log('Taking screenshot of the second tab (webdriveruniversity Homepage)')
        cy.window().then(win => {
            cy.wait(1000) // Add wait to prevent flakiness
            win.focus()
            cy.screenshot()
        })

        //Go to the third tab Actions and verify that the title of the page contains Actions:
        // Switch to the third tab
        cy.log('Switching to the third tab (Actions page)')
        cy.window().then(win => {
            win.open('https://webdriveruniversity.com/Actions/index.html', '_blank')
            cy.wait(1000) // Add wait to prevent flakiness
            win.focus()
        })

        // Verify the title of the page contains Actions
        cy.title().should('contain', 'Actions')
        cy.screenshot()

    })
})



