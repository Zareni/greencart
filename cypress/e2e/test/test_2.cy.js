describe('Adding items to the basket', () => {
  before(() => {
    cy.visit('/')
  })

  it('Adds 1 item in the basket 4 times using FOR loop', () => {
    // Add the first item 4 times
    for (let i = 0; i < 4; i++) {
      cy.get('.product-action > button').eq(0).contains('ADD TO CART').click()
    }
    cy.screenshot()
    //Add 3 random item
    for (let i = 0; i < 1; i++) {
      cy.get('.product-action > button').each(($el, index, $list) => {
        if (index === 1 || index === 3 || index === 5) {
          cy.wrap($el).contains('ADD TO CART').click()
        }
      })
    }
    cy.screenshot()

    // Click on basket icon and then click on Proceed to checkout button
    cy.get('.cart-icon').click()
    cy.screenshot()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000)



    // Verify that the basket contains 7 items
    //Expected behaviors 
    it('In the basket 1 item should be added 4 times, and the other 3 items once each', () => {
      cy.get('table tr td p.quantity')
        .then($elements => {
          // Get the number of items in the table
          const numItems = $elements.length;
          // Loop through the elements and log the text of each element
          for (let i = 0; i < numItems; i++) {
            const quantity = $elements.eq(i).text()
            cy.log(`Quantity of item ${i + 1}: ${quantity}`)
          }
          let sum = 0;
          cy.get('table tr td p.quantity').each(($el) => {
            const quantity = parseInt($el.text())
            sum += quantity;
          })
            .then(() => {
              cy.log(`Total quantity in the basekt: ${sum}`)
            })
        })
      cy.screenshot()
    })

    it('Verifies items in the basket', () => {
      // Verify that the first item was added 4 times and the other 3 items were added once each
      cy.get('table tr td p.quantity')
        .each(($item, index) => {
          if (index === 0) {
            cy.wrap($item).should('have.text', '4')
          } else {
            cy.wrap($item).should('have.text', '1')
          }
          cy.url().should('include', 'cart')
        })
      cy.screenshot()
    })
  })
})


// // Method to find the cheapest item and add it to the basket
// function addCheapestItemToBasket() {
//   // Get all the product prices
//   cy.get('h4.product-price')
//     .then($prices => {
//       // Sort the prices from lowest to highest
//       const sortedPrices = $prices.toArray().sort((a, b) => parseFloat(a.innerText) - parseFloat(b.innerText));
//       // Get the cheapest item's price
//       const cheapestPrice = sortedPrices[0].innerText;
//       // Click the "Add to Cart" button for the cheapest item
//       cy.contains('Add to Cart').click({ force: true }).then(() => {
//         // Verify that the item was added to the basket
//         cy.get('.cart-icon').click();
//         cy.contains(cheapestPrice).should('exist');
//       });
//     });
// }

// // Method to find the most expensive item and add it to the basket
// function addMostExpensiveItemToBasket() {
//   // Get all the product prices
//   cy.get('h4.product-price')
//     .then($prices => {
//       // Sort the prices from highest to lowest
//       const sortedPrices = $prices.toArray().sort((a, b) => parseFloat(b.innerText) - parseFloat(a.innerText));
//       // Get the most expensive item's price
//       const mostExpensivePrice = sortedPrices[0].innerText;
//       // Click the "Add to Cart" button for the most expensive item
//       cy.contains('Add to Cart').click({ force: true }).then(() => {
//         // Verify that the item was added to the basket
//         cy.get('.cart-icon').click();
//         cy.contains(mostExpensivePrice).should('exist');
//       });
//     });
// }

// // Method to randomly find one item except previous ones and add it to the basket
// function addRandomItemToBasket() {
//   // Get the names of all the products already in the basket
//   const basketItems = [];
//   cy.get('.cart-items table tr td:nth-child(2)').each(($el, index, $list) => {
//     basketItems.push($el.text().trim());
//   }).then(() => {
//     // Get the names of all the products not in the basket
//     const availableItems = [];
//     cy.get('.product-name').each(($el, index, $list) => {
//       const productName = $el.text().trim();
//       if (!basketItems.includes(productName)) {
//         availableItems.push(productName);
//       }
//     }).then(() => {
//       // Choose a random item from the available items
//       const randomIndex = Math.floor(Math.random() * availableItems.length);
//       const randomItem = availableItems[randomIndex];
//       // Click the "Add to Cart" button for the random item
//       cy.contains(randomItem).parent().parent().find('button').click({ force: true }).then(() => {
//         // Verify that the item was added to the basket
//         cy.get('.cart-icon').click();
//         cy.contains(randomItem).should('exist');
//       });
//     });
//   });
// }