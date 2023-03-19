// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('verify_elements_on_the_home_page', () => {
    it('Should display the home page correctly', () => {

        // Verify the page title
        cy.title().should('eq', 'GreenKart - veg and fruits kart')

        //Blinking text
        cy.get('.blinkingText').should('be.visible')
            .and('have.text', 'Free Access to InterviewQues/ResumeAssistance/Material')
            .and('have.attr', 'href', 'https://rahulshettyacademy.com/documents-request')
            .and('have.attr', 'target', '_blank')
            .and('have.class', 'cart-header-navlink')

        // Verify that the logo is visible
        cy.get('.greenLogo').should('be.visible')
            .and('have.text', 'GREENKART')
        cy.get('.redLogo').should('be.visible')
            .and('have.text', 'KART')

        // Verify that the search input field and buttonis are visible and enabled
        cy.get('.search-keyword').should('be.visible')
            .and('be.enabled')
        cy.get('.search-button').should('be.visible')
            .and('be.enabled')

        //Top Deals
        cy.get('[href="#/offers"]').should('have.text', 'Top Deals')
            .and('have.attr', 'href', '#/offers')
            .and('have.attr', 'target', '_blank')
            .and('have.class', 'cart-header-navlink')

        //Flight Booking
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').should('have.text', 'Flight Booking')
            .and('have.attr', 'href', 'https://rahulshettyacademy.com/dropdownsPractise/')
            .and('have.attr', 'target', '_blank')
            .and('have.class', 'cart-header-navlink')

        //Cart info
        cy.get('.cart-info').should('be.visible')
        cy.contains('Items').should('be.visible')
            .and('have.text', 'Items')
        cy.contains('Price').should('be.visible')
            .and('have.text', 'Price')
        cy.get('.cart-icon').should('have.attr', 'href', '#')
        cy.get('.cart-icon > img').should('have.attr', 'src', 'https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png')
            .and('have.attr', 'alt', 'Cart')

        //Item card
        cy.get('.product-image').should('be.visible')
        cy.get('.product-name').should('be.visible')
        cy.get('.product-price').should('be.visible')
        cy.get('.stepper-input').should('be.visible')
        cy.get('.decrement').should('be.visible')
        cy.get('.quantity').should('be.visible')
        cy.get('.increment').should('be.visible')
        cy.get('.product-action').should('be.visible')

        //Footer
        cy.get('footer').should('be.visible')
        cy.get('footer > p').should('have.text', '© 2019 GreenKart - buy veg and fruits online')
    })
})

Cypress.Commands.add('add_items_in_the_basekt', () => {
    // Add the first item 4 times
    for (let i = 0; i < 4; i++) {
        cy.get('.product-action > button').eq(0).contains('ADD TO CART').click()
    }
    for (let i = 0; i < 1; i++) {
        cy.get('.product-action > button').each(($el, index, $list) => {
            if (index === 1 || index === 3 || index === 5) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
    }
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
})

Cypress.Commands.add('add_items_in_the_basket_and_enter_total_amount_in_the_Promo_code', () => {
    cy.add_items_in_the_basekt()
    cy.get('.totAmt').then(($totalAmt) => {
        const totalAmtText = $totalAmt.text()
        const totalAmtNum = parseFloat(totalAmtText.replace('$', ''))

        // Create the promo code using the total amount number

        const promoCode = `${totalAmtNum}`
        // Enter the promo code
        cy.get('.promoCode').type(promoCode)

    })
})
Cypress.Commands.add('alert message text', () => {
    $(".list-alert").click(function () {
        alert("Well done you clicked on the link!");
    });



})