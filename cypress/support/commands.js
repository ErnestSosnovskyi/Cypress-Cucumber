Cypress.Commands.add("acceptCookiesIfPresent", () => {
  cy.get("body").then(($body) => {
    if (
      $body.find('#onetrust-accept-btn-handler, button:contains("Accept")')
        .length > 0
    ) {
      cy.get('#onetrust-accept-btn-handler, button:contains("Accept")')
        .first()
        .click({ force: true });
    }
  });
});
