
# Wingify QA Automation — Dream Portal

Automated functional testing project for the Wingify QA Intern Assessment.

The project automates the main user flows of the Dream Portal website and also includes a small AI-based validation as a bonus.

## Website

https://arjitnigam.github.io/myDreams/

## Tech Stack

- Playwright
- TypeScript
- Playwright Test
- Page Object Model (POM)
- Google Gemini API
- Git & GitHub

## What I Tested

### Home Page

- Loading animation appears when the page loads
- Loading animation disappears after the expected delay
- Main content becomes visible
- "My Dreams" button becomes available
- Clicking "My Dreams" opens the Dreams Diary and Dreams Total pages
- Opened pages are checked for the expected URL and page content

### Dreams Diary

- Exactly 10 dream entries are displayed
- Dream type is either `Good` or `Bad`
- Dream name, days ago and dream type are populated
- Empty cell validation
- Invalid dream type validation
- Recurring dreams are calculated independently from the diary data
- "Flying over mountains" is identified as recurring
- "Lost in maze" is identified as recurring

### Dreams Summary

- Good Dreams = 6
- Bad Dreams = 4
- Total Dreams = 10
- Recurring Dreams = 2
- Summary recurring count is compared with the independently calculated diary result

## Test Design

The tests are mapped to test case IDs such as:

- `TC-001` — Loading animation appears
- `TC-005` — My Dreams opens the required pages
- `TC-008` — Diary contains exactly 10 entries
- `TC-015` — Recurring dreams are independently calculated
- `TC-019` — Invalid dream type is rejected
- `TC-020` — Empty dream cells are detected
- `TC-021` — Loading timing boundary
- `TC-022` — Destination page content validation

The complete test case mapping is available in `TEST_CASES.md`.

## Project Structure

    Wingify-Assesment/
    │
    ├── pages/
    │   ├── BasePage.ts
    │   ├── HomePage.ts
    │   ├── DreamsDiaryPage.ts
    │   └── DreamsTotalPage.ts
    │
    ├── tests/
    │   ├── home.spec.ts
    │   ├── dreams-diary.spec.ts
    │   ├── dreams-total.spec.ts
    │   └── ai-validation.spec.ts
    │
    ├── utils/
    │   └── aiClassifier.ts
    │
    ├── models/
    │
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.ts
    ├── tsconfig.json
    ├── TEST_CASES.md
    └── README.md

Generated test artifacts such as `playwright-report/` and `test-results/` are excluded from Git using `.gitignore`.

## Page Object Model

The project uses Page Object Model to keep page-specific locators and actions separate from the test cases.

### BasePage

Contains common functionality such as:

- Waiting for the page to be ready
- Taking screenshots
- Reading the current URL

### HomePage

Contains:

- Loading animation
- Main content
- My Dreams button
- Navigation action

### DreamsDiaryPage

Contains:

- Diary table
- Dream rows
- Method to extract structured dream data

### DreamsTotalPage

Contains:

- Summary table
- Method to read the summary statistics

## AI Validation

As a bonus, Gemini is used to classify dream names as `Good` or `Bad`.

For each classification, the test records:

- Predicted label
- Confidence
- Explanation
- Whether the confidence passes the `0.8` threshold

The AI result is compared with the classification displayed in the Dreams Diary.

If the Gemini request fails, the test uses a simple keyword-based fallback classifier instead of stopping the complete validation flow.

The API key is stored locally in `.env` and is not committed to GitHub.

The AI validation is kept separate from the core functional tests so that the main test suite does not depend on the availability of the AI service.

## Reporting

Playwright's HTML reporter is enabled.

Screenshots are configured for test evidence and videos are retained when a test fails.

The test suite is currently configured to use a single worker because the website is hosted on GitHub Pages and parallel navigation produced intermittent network/navigation failures during testing.

With a single worker, the complete test suite runs consistently.

### Latest Test Result

24 passed

## Running the Tests

### 1. Install dependencies

    npm install

### 2. Configure environment variables

Create a `.env` file based on `.env.example`.

Add the Gemini API key if AI validation is required.

The `.env` file should never be committed to GitHub.

### 3. Run the complete test suite

    npm test

### 4. Run Playwright directly

    npx playwright test

### 5. Open the HTML report

    npx playwright show-report

## Design Decisions

A few testing decisions were made based on the behavior of the application.

### 1. Independent recurring dream validation

The recurring dream count is not trusted only from the summary page.

The diary data is read first, dream names are counted, and dreams appearing more than once are independently identified as recurring.

This allows the summary value to be compared against an independently calculated result.

### 2. Loading animation validation

The loading animation is tested based on the application's actual transition behavior rather than relying only on a fixed three-second sleep.

A separate timing-boundary test checks that the loading state is still visible before the expected transition.

### 3. Navigation validation

The navigation test checks:

- Number of opened pages
- Destination URLs
- Expected content on the destination pages

This verifies that the button does not simply open another tab but opens the expected application pages.

### 4. Separate edge-case tests

Negative and boundary scenarios are kept separate from the main functional tests so that failures are easier to understand.

Examples include:

- Invalid dream type
- Empty table cells
- Loading timing boundary
- Destination page validation

### 5. AI as a bonus layer

AI validation is treated as an additional layer rather than a dependency for the core functional tests.

The main UI tests should remain useful even if the AI service is unavailable.

## Test Coverage

The automation covers the three main pages of the Dream Portal.

| Area           | Coverage                                                  |
| -------------- | --------------------------------------------------------- |
| Home Page      | Loading, visibility, navigation, destination validation   |
| Dreams Diary   | Row count, field validation, dream types, recurring logic |
| Dreams Summary | Good, Bad, Total and Recurring counts                     |
| Edge Cases     | Invalid type, empty cells, timing boundary                |
| AI Bonus       | Classification, confidence and fallback                   |
| Reporting      | HTML report, screenshots and failure video                |

## Limitations

- The application is a static website, so some business behavior cannot be tested through a backend or API.
- AI classification depends on an external model and can be affected by API availability or quota.
- The fallback classifier is intentionally simple and is only used when the AI service is unavailable.
- The tests use the provided website as the test environment, so network availability can affect execution time.
- The current test configuration uses a single worker to keep execution stable against the hosted test environment.

## What I'd Improve Next

If I had more time, I would:

- Add more data-driven negative cases
- Improve AI disagreement reporting
- Add more detailed test evidence to the HTML report
- Run the tests against additional browser configurations
- Add CI execution through GitHub Actions

## Test Result

Latest full local execution:

24 passed

The project was developed incrementally with separate commits for:

- Project setup
- Page Object Model
- Core functional tests
- Edge-case validation
- Recurring dream business logic
- AI validation
- Reporting and test stability

## Repository

This repository is kept private as required by the assessment instructions.
