// cypress/support/e2e.ts

// Import Cypress commands if needed
// import './commands';

// Optionally, you can configure Cypress using the configuration object
// More configuration options can be found in the Cypress documentation:
// https://docs.cypress.io/guides/references/configuration.html

// Example configuration:
Cypress.config({
    // Your configuration options go here
    // For example:
    baseUrl: 'http://localhost:3000', // Adjust this to your application's URL
    // Other configuration options...
  });
  
  // You can also include any setup code that needs to run before the tests
  
  // For example, you might want to clear the local storage before each test
  beforeEach(() => {
    cy.clearLocalStorage();
  });
  