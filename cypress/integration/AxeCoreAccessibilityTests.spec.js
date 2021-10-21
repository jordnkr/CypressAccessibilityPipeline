context('Axe Core accessibility tests', function() {
    /*describe('Home page Accessibility', () => {
        it('Passes accessibility tests', () => {
            cy.visit('/')
            cy.injectAxe()
            cy.checkA11y()
        })
    })*/
    
    Object.keys(Cypress.env('urls')).forEach((url) => {
        it ('Run axe-core against: ' + url, () => {
            cy.visit(Cypress.env('urls')[url])
            cy.injectAxe()
            cy.checkA11y(null, Cypress.env('A11Y_OPTIONS'))
            
        })
    })
})