describe('Click on “Link 1” and verify Alert message is displayed', () => {
    it('should verify visibility of Link 1 on hover', () => {
        // Navigate to the webpage
        cy.visit('https://webdriveruniversity.com/Actions/index.html')

        // Assert that the dropdown content is not visible by default
        cy.get('.list-alert').should('not.be.visible')

        // Select all Hover Me First buttons and trigger mouseover event
        cy.get('.hover > .dropbtn').each((btn) => {
            cy.wrap(btn).trigger('mouseover')
            cy.wait(2000)

            // Verify that the corresponding Link 1 is visible  ---FAIL
            cy.wrap(btn).siblings('.dropdown-content').find('a.list-alert').should('be.visible')

            // Stub the window.alert method
            cy.stub(window, 'alert')

            // Click on the button that triggers the alert
            cy.get('#alert-button').click()

            // Assert that the alert method was called   
            cy.window().then((win) => {
                expect(win.alert).to.be.calledWith('Well done you clicked on the link!')
            })

            $(".list-alert").click(function () {
                alert("Well done you clicked on the link!");
            });

        })
    })

})
