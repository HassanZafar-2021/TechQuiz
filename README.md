# TechQuiz

## Video

## Description

This interactive quiz platform makes learning technical concepts engaging and accessible. Built to provide immediate feedback during the learning process, it enables users to test their knowledge and reinforce understanding through active recall rather than passive learning. The project taught me React state management, asynchronous data fetching, and end-to-end testing with Cypress while implementing clean component architecture and responsive design principles.

## Table of Contents

- [Video](#video)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

1. git clone https://github.com/HassanZafar-2021/TechQuiz.git
2. cd Develop Folder
3. npm i
4. Put in MongoDB env var
5. npm run start:dev to open up client and server
6. npm run test and npm run test:component to test from Quiz.jsx

## Usage

Start Quiz and answer questions and can redo quiz if need be.

## Credits

No Collaborators.

## License

No License

## Badges

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

## Features

Interactive Quiz Interface: Clean, user-friendly design for seamless quiz-taking experience
Randomized Questions: Fresh questions appear each time you start a new quiz
Real-time Scoring: Immediate feedback as you progress through questions
Testing: Testing component and end to end of quiz files.

## How to Contribute

Fork & clone repo and make your own branch and make push request to make a PR request to contribute.

## Tests

This project includes End-to-End (E2E) testing using Cypress to ensure the quiz functionality works as expected.

1. npm install cypress --save-dev
2. npx cypress open
3. npx cypress run

Example: describe("Tech Quiz E2E", () => {
beforeEach(() => {
cy.visit("/");
});

it("should start the quiz and display the first question", () => {
cy.contains("Start Quiz").click();
cy.get(".card h2").should("be.visible");
});

it("should allow answering all questions and completing the quiz", () => {
cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed").should("be.visible");
    cy.contains(/^Your score: \d+\/10$/).should("be.visible");

});

it("should allow restarting the quiz after completion", () => {
cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Take New Quiz").click();
    cy.get(".card h2", { timeout: 60000 }).should("be.visible");

});
});
