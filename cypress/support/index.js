// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-axe"; // accessibility testing

// Alternatively you can use CommonJS syntax:
// require('./commands')

// returning false here prevents Cypress from failing the test due to an uncaught console exception (not the target of these accessibility tests)
Cypress.on('uncaught:exception', function(err, runnable) {
    return false 
})

// Disable screenshots
Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
})
