# Telnyx E2E Test Automation Framework (Cypress + Cucumber BDD)

An automated end-to-end testing suite for [Telnyx](https://telnyx.com) built with **Cypress**, **Cucumber (Gherkin syntax)**, and a multi-environment configuration setup.

The project includes an automated **CI/CD pipeline** that executes the test suite and publishes an interactive HTML report to **GitHub Pages**.

---

## 📋 Test Plan & Scope

The suite automates **15 core E2E scenarios** across desktop and mobile viewports:

| TC ID     | Area            | Scenario                    | Target / Verification                 |
| :-------- | :-------------- | :-------------------------- | :------------------------------------ |
| **TC001** | Home Page       | Initial load verification   | Header, Main, and H1 visibility       |
| **TC002** | Registration    | Navigation to Sign-Up page  | URL validation & form rendering       |
| **TC003** | Registration    | Empty form submission       | Client-side validation errors         |
| **TC004** | Pricing         | Open Pricing section        | Navigation & page header              |
| **TC005** | Voice API       | Voice API landing page      | Route resolution                      |
| **TC006** | Contact Us      | "Talk to an expert" CTA     | Redirection to contact form           |
| **TC007** | Auth            | Portal login redirection    | Link integrity to `portal.telnyx.com` |
| **TC008** | Compliance      | Cookie Consent Banner       | Banner visibility & acceptance flow   |
| **TC009** | Legal           | Terms and Conditions        | Footer link navigation                |
| **TC010** | Social          | Social media outbound links | `target="_blank"` attribute checks    |
| **TC011** | Contact Us      | Empty form submission       | Marketo form validation messages      |
| **TC012** | Contact Us      | Inquiry reason dropdown     | Select option handling                |
| **TC013** | Contact Us      | Invalid email format        | Field syntax validation               |
| **TC014** | Network         | "Our Network" page link     | Footer routing & content display      |
| **TC015** | Mobile Viewport | Hamburger menu rendering    | UI responsiveness at 390x844          |

> *A complete spreadsheet breakdown with step-by-step Gherkin mappings and priorities is available in `Telnyx_Test_Plan_15_TestCases.xlsx`.*

---

## 🗂️ Project Structure

```text
├── .github/
│   └── workflows/
│       └── pipeline.yml           # GitHub Actions CI workflow for test execution & Pages deployment
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── telnyx.feature     # 15 Gherkin BDD test scenarios
│   ├── fixtures/
│   │   └── testData.json          # URLs, selectors, and test payloads
│   └── support/
│       ├── step_definitions/
│       │   └── telnyx_steps.js    # Step definitions and Cypress step implementations
│       ├── commands.js            # Custom Cypress commands (e.g. cookie consent handling)
│       └── e2e.js                 # Global lifecycle hooks and uncaught exception handlers
├── cypress.config.js              # Default Desktop configuration (1920x1080)
├── cypress.config.mobile.js       # Mobile Viewport configuration (390x844)
├── generate-report.mjs            # HTML report aggregator (multiple-cucumber-html-reporter)
├── Telnyx_Test_Plan_15_TestCases.xlsx
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following tools are installed:

* **Node.js:** v20+ recommended
* **npm:** v10+

---

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm ci
```

---

## 🚀 Running Tests

### Run All Tests — Desktop

Run the complete test suite using the default desktop configuration:

**Viewport:** `1920x1080`

```bash
npm run cy:run
```

---

### Run Tests — Mobile

Run the test suite using the mobile configuration:

**Viewport:** `390x844`

```bash
npm run cy:run:mobile
```

---

### Open Cypress Interactive Test Runner

Launch Cypress in interactive mode:

```bash
npx cypress open
```

---

### Generate HTML Report Locally

Generate the Cucumber HTML report:

```bash
npm run report
```

The generated report will be available at:

```text
./public/index.html
```

---

### Run Full Suite and Generate Report

Execute the complete test suite and generate the HTML report in a single command:

```bash
npm test
```

---

## 📊 CI/CD Pipeline & Live Report

The project uses **GitHub Actions** to automate test execution and report deployment.

Workflow configuration:

```text
.github/workflows/pipeline.yml
```

### Pipeline Flow

1. **Trigger**

   The workflow starts automatically on every `push` to the `main` branch.

2. **Dependency Installation**

   Project dependencies are installed using `npm ci`.

3. **Test Execution**

   Cypress tests are executed in headless mode.

4. **Report Generation**

   Cucumber JSON artifacts are processed using `multiple-cucumber-html-reporter` to generate a static HTML report.

5. **GitHub Pages Deployment**

   The generated report is uploaded as an artifact and deployed directly to **GitHub Pages**.

### CI/CD Flow

```text
Git Push
   │
   ▼
GitHub Actions
   │
   ├── Install Dependencies
   │
   ├── Run Cypress Tests
   │
   ├── Generate Cucumber JSON
   │
   ├── Build HTML Report
   │
   └── Deploy to GitHub Pages
             │
             ▼
       Live Test Report
```

---

## 📈 Test Reporting

The framework uses **Cucumber JSON artifacts** as the source for generating an interactive HTML report.

The report provides a structured overview of:

* Test scenarios
* Feature files
* Steps
* Passed/failed status
* Execution details

The final report is automatically published to **GitHub Pages**, making the latest test results accessible without requiring a local Cypress environment.

---

## 🧪 BDD Approach

Test scenarios are written using **Gherkin syntax**, following the Behavior-Driven Development approach.

The main feature file is:

```text
cypress/e2e/features/telnyx.feature
```

It contains all **15 automated test scenarios**, while the corresponding step implementations are located in:

```text
cypress/support/step_definitions/telnyx_steps.js
```

This separation keeps business-readable test scenarios independent from their Cypress implementation.

---

## 🔧 Configuration

The project uses separate Cypress configurations for different execution environments:

| Configuration              |   Viewport  | Purpose                   |
| :------------------------- | :---------: | :------------------------ |
| `cypress.config.js`        | `1920x1080` | Desktop E2E testing       |
| `cypress.config.mobile.js` |  `390x844`  | Mobile/responsive testing |

This allows the same BDD test suite to be executed against different viewport configurations without duplicating test scenarios.

---

## 📁 Test Plan

The detailed test plan is provided in:

```text
Telnyx_Test_Plan_15_TestCases.xlsx
```

The spreadsheet contains:

* Test case IDs
* Test areas
* Test scenarios
* Step-by-step Gherkin mappings
* Expected results
* Test priorities

---

## 🛠️ Key Features

* **15 automated E2E scenarios**
* **Cypress** test automation
* **Cucumber / Gherkin BDD**
* Desktop and mobile viewport testing
* Separate Cypress configurations
* Reusable fixtures and custom commands
* Cucumber HTML reporting
* Automated GitHub Actions pipeline
* Automatic GitHub Pages deployment
* Live interactive test report
* Structured test plan in Excel format