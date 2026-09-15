import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// --- GIVEN ---
Given("I visit the home page", () => {
  cy.visit("/");
});

Given("I visit the {string} page", (path) => {
  cy.visit(path);
});

Given("I set the viewport to mobile", () => {
  cy.viewport(390, 844);
});

Given("I accept cookies", () => {
  cy.acceptCookiesIfPresent();
});

// --- WHEN ---
When("I click the {string} link", (linkText) => {
  cy.contains("a", linkText, { matchCase: false }).click({ force: true });
});

When("I click the {string} button", (buttonText) => {
  cy.contains("button, a, span", buttonText, { matchCase: false }).click({
    force: true,
  });
});

When("I submit the main form", () => {
  cy.get('form button[type="submit"]').first().click({ force: true });
});

When("I scroll to the footer", () => {
  cy.get("footer").scrollIntoView();
});

When("I submit the contact form", () => {
  cy.get('button[type="submit"]')
    .contains("Submit", { matchCase: false })
    .click({ force: true });
});

When("I select {string} from the Reason for Contact dropdown", (optionText) => {
  cy.get('select[id*="Reason_for_Contact"]').select(optionText, {
    force: true,
  });
});

When("I fill in First Name with {string}", (text) => {
  cy.get('input[name="FirstName"]').type(text);
});

When("I fill in Last Name with {string}", (text) => {
  cy.get('input[name="LastName"]').type(text);
});

When("I fill in Email with {string}", (text) => {
  cy.get('input[name="Email"]').type(text);
});

// --- THEN ---
Then("I should see the header and main content", () => {
  cy.get("header").should("be.visible");
  cy.get("main").should("be.visible");
});

Then("the H1 should not be empty", () => {
  cy.get("h1").should("be.visible").invoke("text").should("not.be.empty");
});

Then("the URL should contain {string}", (urlPart) => {
  cy.url().should("include", urlPart);
});

Then("I should see the sign up form", () => {
  cy.get("form").should("be.visible");
});

Then("I should see the {string} heading", (headingText) => {
  cy.contains("h1", headingText).should("be.visible");
});

Then("I should see validation errors", () => {
  cy.get(
    '[aria-invalid="true"], form:invalid, [role="alert"], [data-testid*="error"]',
  ).should("exist");
});

Then(
  "the {string} link should have an href containing {string}",
  (linkText, hrefPart) => {
    cy.contains("a", linkText)
      .should("have.attr", "href")
      .and("include", hrefPart);
  },
);

Then("I should see the cookie banner", () => {
  cy.get('div[id="onetrust-banner-sdk"]').should("exist");
});

Then("the cookie banner should disappear", () => {
  cy.get('div[id="onetrust-banner-sdk"]').should("not.be.visible");
});

Then("the LinkedIn, X, and Facebook links should open in a new tab", () => {
  cy.get('footer a[href*="linkedin.com"]').should(
    "have.attr",
    "target",
    "_blank",
  );
  cy.get('footer a[href*="twitter.com"], footer a[href*="x.com"]').should(
    "have.attr",
    "target",
    "_blank",
  );
  cy.get('footer a[href*="facebook.com"]').should(
    "have.attr",
    "target",
    "_blank",
  );
});

Then("I should see contact form validation errors", () => {
  cy.get(".mktoErrorMsg").should("exist");
});

Then("the dropdown value should be set", () => {
  cy.get('select[id*="Reason_for_Contact"]')
    .invoke("val")
    .should("not.be.empty");
});

Then("I should see the hamburger menu", () => {
  cy.get(
    'header button[aria-label*="menu"], header button[aria-haspopup="dialog"]',
  ).should("be.visible");
});
