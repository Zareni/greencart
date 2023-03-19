describe('Drag and drop “Drag me to my target” box inside the “Drop here” box', () => {
    it('Should perform drag and drop action', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')

        // 1. Trigger mousedown event on draggable element with left button (which: 1)
        cy.get('#draggable').trigger('mousedown', { which: 1 })

        // 2. Trigger mousemove event on droppable element to move the draggable element over it
        // 3. Trigger mouseup event on droppable element with force option to drop the draggable element
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })

        //  “Drag me to my target” box should be successfully moved inside “Drop here” box 
        cy.get('#draggable b').click()
    })
})
