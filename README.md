# Playwright Test Suite

Automated end-to-end testing framework using Playwright for browser automation and testing.

## Prerequisites

- **Node.js** 18 or higher
- npm (included with Node.js)

## Installation

```bash
npm install
```

This will install all required dependencies including @playwright/test.

## Running Tests

### Run Tests in Headless Mode (Default)

```bash
npx playwright test
```

### Run Tests in Headed Mode (Browser Visible)

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/example.spec.js
```

## View HTML Report

After running tests, view the detailed HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing test results, traces, and screenshots.

## Tech Stack

**Playwright** @1.59.1 - Cross-browser web automation and testing framework (Chromium, Firefox, WebKit)
