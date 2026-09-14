Feature: Telnyx E2E Automation Tests

  Scenario: TC001 - Checking if the home page has loaded successfully
    Given I visit the home page
    Then I should see the header and main content
    And the H1 should not be empty

  Scenario: TC002 - Checking the transition to the registration page
    Given I visit the home page
    And I accept cookies
    When I click the "Sign up" link
    Then the URL should contain "/sign-up"
    And I should see the sign up form
    And I should see the "Create your account" heading

  Scenario: TC003 - Checking the validation of an empty registration form
    Given I visit the "/sign-up" page
    When I submit the main form
    Then the URL should contain "/sign-up"
    And I should see validation errors

  Scenario: TC004 - Checking if the pricing section opens on the main page
    Given I visit the home page
    And I accept cookies
    When I click the "Pricing" link
    Then the URL should contain "/pricing"
    And the H1 should not be empty

  Scenario: TC005 - Checking access to the Voice API page
    Given I visit the home page
    And I accept cookies
    When I click the "Voice API" link
    Then the URL should contain "/voice-api"

  Scenario: TC006 - Testing the "Talk to an expert" button
    Given I visit the "/voice-api" page
    And I accept cookies
    When I click the "Talk to an expert" button
    Then the URL should contain "/contact-us"

  Scenario: TC007 - Checking the redirect to the authorization portal
    Given I visit the home page
    Then the "Log in" link should have an href containing "portal.telnyx.com"

  Scenario: TC008 - Checking the Cookie Consent Banner
    Given I visit the home page
    Then I should see the cookie banner
    When I accept cookies
    Then the cookie banner should disappear

  Scenario: TC009 - Checking the "Terms and Conditions of Service" link
    Given I visit the home page
    When I scroll to the footer
    And I click the "Terms and Conditions" link
    Then the URL should contain "/terms-and-conditions"

  Scenario: TC010 - Checking for links to social networks
    Given I visit the home page
    When I scroll to the footer
    Then the LinkedIn, X, and Facebook links should open in a new tab

  Scenario: TC011 - Contact Us: Checking validation of empty form submission
    Given I visit the "/contact-us" page
    And I accept cookies
    When I submit the contact form
    Then I should see contact form validation errors

  Scenario: TC012 - Contact Us: Interacting with the "How can we help?" dropdown
    Given I visit the "/contact-us" page
    When I select "Support" from the Reason for Contact dropdown
    Then the dropdown value should be set

  Scenario: TC013 - Contact Us: Entering an invalid email address
    Given I visit the "/contact-us" page
    When I fill in First Name with "Test"
    And I fill in Last Name with "User"
    And I fill in Email with "invalid-email-without-at.com"
    And I submit the contact form
    Then I should see contact form validation errors

  Scenario: TC014 - Footer: Navigating to the Our Network page
    Given I visit the home page
    And I accept cookies
    When I scroll to the footer
    And I click the "Our Network" link
    Then the URL should contain "/our-network"
    And the H1 should not be empty

  Scenario: TC015 - Mobile Viewport: Checking the Hamburger Menu rendering
    Given I set the viewport to mobile
    And I visit the home page
    Then I should see the hamburger menu