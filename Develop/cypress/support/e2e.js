// cypress/support/e2e.js

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests in the command log
// Uncomment if you want to clean up the test logs
// const app = window.top
// if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
//   const style = app.document.createElement('style')
//   style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
//   style.setAttribute('data-hide-command-log-request', '')
//   app.document.head.appendChild(style)
// }

// Example of uncaught exception handling
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
