// cypress/integration/weblog.spec.js

/// <reference types="cypress" />

describe('Weblog App E2E Tests', () => {
  it('successfully loads and displays posts', () => {
    cy.visit('/'); // Adjust the URL to your application's URL

    // Wait for the loading indicator to disappear
    cy.get('.loading-indicator').should('not.exist');

    // Ensure that the list of posts is displayed
    cy.get('article').should('have.length.greaterThan', 0);

    // Click on the first post
    cy.get('article').first().click();

    // Wait for the post detail page to load
    cy.url().should('include', '/1'); // Adjust the URL pattern based on your application

    // Assert that the post detail content is displayed
    cy.get('article').should('exist');
  });

  // Add more tests as needed
});
