// cypress/support/commands.js

// Example of a custom command for logging in
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get('button[type="submit"]').click();
});

// Example of a custom command to select by data-cy attribute
Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

// Add more custom commands as needed for your project
