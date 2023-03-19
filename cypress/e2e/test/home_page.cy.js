describe('Test suite for Geenkart', () => {
  beforeEach(() => {
    // Load the website before each test
    cy.visit('/')
  })

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
      .and('have.attr', 'alt', 'Cart').click()
    //Cart preview
    cy.get('.cart-preview').should('be.visible')
      .and('have.css', 'position', 'absolute')
      .and('have.class', 'active')
    cy.get('.empty-cart img').should('be.visible')
      .and('have.attr', 'alt', 'empty-cart')
      .and('have.attr', 'src', 'https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png')
    cy.get('.cart-preview h2 ').should('have.text', 'You cart is empty!')
    cy.get('.action-block').should('be.visible')
    cy.contains('PROCEED TO CHECKOUT').should('have.text', 'PROCEED TO CHECKOUT')
    cy.get('.cart-icon > img').click()
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

  it('Should search for a product', () => {
    // Enter a search term in the search input
    cy.get('.search-keyword').type('carrot')
    // Click the search button
    cy.get('.search-button').click()
    // Verify that the search results are displayed
    cy.get('.products').should('be.visible')
    cy.get('.product-image > img').should('be.visible')
      .and('have.attr', 'alt', 'Carrot - 1 Kg')
      .and('have.attr', 'src', './images/carrots.jpg')
    cy.get('.product >  .product-name').should('be.visible')
      .and('have.text', 'Carrot - 1 Kg')
    cy.get('.products > .product > .product-price').should('be.visible')
      .and('have.text', '56')
    cy.get('.stepper-input').should('be.visible')
    cy.get('.decrement').should('be.visible')
    cy.get('.quantity').should('be.visible')
    cy.get('.increment').should('be.visible')
    cy.get('.product-action').should('be.visible')
  })

  it('Should filter search results', () => {
    // Enter a search term in the search input
    cy.get('.search-keyword').type('ca')
    // Click the search button
    cy.get('.search-button').click()
    // Verify that only "Frozen" products are displayed
    cy.get('.product:visible').should('have.length', 4)
  })

  it('Should verify the title tab text', () => {
    // Verify the page title
    cy.title().should('eq', 'GreenKart - veg and fruits kart')
  })
})
