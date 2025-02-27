describe("Tech Quiz E2E", { defaultCommandTimeout: 60000 }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start the quiz and display the first question", () => {
    cy.get("button.btn-primary").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });

  it("should allow answering questions and progress through the quiz", () => {
    cy.get("button.btn-primary").contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed").should("be.visible");
  });

  it("should display the final score in the correct format", () => {
    cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").eq(1).click();
    }

    cy.contains(/^Your score: \d+\/10$/).should("be.visible");
  });

  it("should allow restarting the quiz after completion", () => {
    cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Take New Quiz").click();
    cy.reload(); // Ensure UI resets
    cy.contains("Start Quiz", { timeout: 30000 }).should("be.visible");
  });

  it("should render each question with four numbered answer options", () => {
    cy.contains("Start Quiz").click();

    cy.get(".card h2").should("be.visible");
    cy.get(".btn-primary").should("have.length", 4);
    cy.get(".btn-primary").each(($el, index) => {
      cy.wrap($el).should("contain.text", index + 1);
    });
  });

  it("should allow starting a new quiz after completing one", () => {
    cy.contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Take New Quiz").click();

    // Wait for the new quiz to load
    cy.get(".card h2", { timeout: 60000 }).should("be.visible");

    // Verify we can complete the new quiz too
    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed").should("be.visible");
  });
});
