// cypress/support/component.js
import { mount } from "cypress/react";

// Augment the Cypress namespace to include the mount command
Cypress.Commands.add("mount", mount);

// You can include global styles or providers here if needed
// import '../src/index.css'

// Example of wrapping components with providers if needed
// const customMount = (component, options = {}) => {
//   const { ...mountOptions } = options
//   return mount(
//     <YourProvider>
//       {component}
//     </YourProvider>,
//     mountOptions
//   )
// }
// Cypress.Commands.add('mount', customMount)
