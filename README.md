# Selenium to Playwright Migration Example

This project demonstrates the migration of a Java-based automation framework using Selenium and RestAssured to a TypeScript-based framework using Playwright. The migration was performed using GitHub Copilot, and the new framework is located in the `playwright` directory.

## Migration Overview

### Original Framework
- **UI Tests**: Implemented using Selenium with a Page Object Model (POM) design pattern.
- **API Tests**: Implemented using RestAssured for testing RESTful APIs.
- **Test Framework**: Used TestNG for test execution and reporting.
- **Build Tool**: Used Maven for dependency management and build processes.
- **Utilities and Helpers**: Custom classes for browser setup, data handling, reporting, and configuration management.

### Migrated Framework
- **UI Tests**: Migrated to Playwright with TypeScript, maintaining the POM design pattern.
- **API Tests**: Migrated to Playwright's API testing capabilities using TypeScript.
- **Test Framework**: Uses Playwright's built-in test runner for test execution and reporting.
- **Build Tool**: Uses npm for dependency management and build processes.
- **Utilities and Helpers**: Rewritten in TypeScript and adapted for Playwright.

## Directory Structure

```
selenium-test/
├── selenium-java-pom-example-master/   # Original Selenium framework
├── playwright/                         # Migrated Playwright framework
│   ├── src/
│   │   ├── ui-tests/                   # UI test cases
│   │   ├── api-tests/                  # API test cases
│   │   ├── helpers/                    # Utility and helper functions
│   │   └── config/                     # Configuration files
│   ├── playwright.config.ts           # Playwright configuration
│   ├── package.json                   # npm dependencies and scripts
│   └── README.md                      # Documentation
```

## Setup Instructions

1. **Install Dependencies**:
   Navigate to the `playwright` directory and run:
   ```bash
   npm install
   ```

2. **Install Browsers**:
   Install the required browsers for Playwright:
   ```bash
   npx playwright install
   ```

3. **Run Tests**:
   Execute all tests using the following command:
   ```bash
   npm test
   ```

4. **Run Specific Tests**:
   To run a specific test file, use:
   ```bash
   npx playwright test src/ui-tests/tests/WebHostTestCase.test.ts
   ```

## Migration Details

### UI Tests
- Selenium-based UI tests were migrated to Playwright.
- The `ThreadLocalDriver` and `WebDriver` were replaced with Playwright's `browser.newContext()` and `page` objects.
- Timeout handling was implemented using `page.waitForTimeout()`.

### API Tests
- RestAssured-based API tests were migrated to Playwright's APIRequestContext.
- API requests, responses, and assertions were adapted to Playwright's API testing capabilities.

### Test Framework
- TestNG was replaced with Playwright's built-in test runner.
- Test execution and reporting are now handled by Playwright.

### Configuration Management
- Configuration files were migrated to TypeScript and JSON formats for compatibility with Node.js.

## Used Prompt

The migration was guided by the following prompt:

```
I have a Java-based automation framework using Selenium for UI testing and RestAssured for API testing. The framework's structure and test cases are contained within a directory named [selenium-java-pom-example] at the root level of this project. Please migrate this entire framework to use Playwright with TypeScript for both UI and API testing. The new framework should be placed in a new directory named [playwright] at the root level.

The current framework includes:

UI Tests: Implemented using Selenium, likely with a Page Object Model (POM) or similar design pattern. These tests cover various user interactions with the web application. API Tests: Implemented using RestAssured, covering the testing of RESTful APIs. These tests verify API functionality, data integrity, and response codes. Test Framework: Likely using JUnit or TestNG for test execution, reporting, and assertion. Build Tool: Likely Maven or Gradle for dependency management and build processes. Utilities and Helpers: Custom classes for common tasks such as browser setup, data handling, reporting, logging, and configuration management. The migration should include the following:

UI Test Migration:

Migrate all Selenium-based UI tests to Playwright with TypeScript. Maintain the existing POM or similar design pattern, adapting it to Playwright's API. Ensure all UI test cases are successfully converted and functionally equivalent. Handle browser interactions, element locators, waits, and assertions using Playwright's capabilities. API Test Migration:

Migrate all RestAssured-based API tests to Playwright's API testing capabilities using TypeScript. Ensure all API test cases are successfully converted and functionally equivalent. Handle API requests, responses, status codes, data validation (including JSON schema validation if used in the original framework), and authentication. Test Framework Migration:

Migrate the test framework from JUnit/TestNG to a suitable JavaScript testing framework like Jest or Mocha. Ensure all tests can be executed, and reports can be generated. Build Tool Migration:

Migrate the build tool from Maven/Gradle to npm or yarn. Configure the build process for TypeScript compilation, test execution, and dependency management. Utilities and Helpers Migration:

Migrate all utility and helper classes to TypeScript. Adapt these utilities to work with Playwright and the chosen JavaScript testing framework. Configuration Management:

Migrate the configuration mechanism (e.g., properties files, environment variables) to a suitable approach for Node.js and TypeScript. Code Quality and Style:

Adhere to TypeScript best practices and coding conventions. Ensure the migrated codebase is well-structured, readable, and maintainable. Directory Structure:

Maintain a logical and organized directory structure in the new project, mirroring the original framework's structure where appropriate. Documentation: Provide a brief README in the [playwright] outlining the migration process, setup instructions, and how to run the tests.

Please provide the complete migrated code base in the [playwright] directory. If there are any specific challenges or limitations encountered during the migration, please document them in the README. If any dependencies are required, please provide a package.json file in the root directory of the [playwright] directory.
```

## Notes
- The migration ensures functional equivalence between the original and new frameworks.
- Playwright's modern capabilities simplify browser and API interactions compared to Selenium and RestAssured.