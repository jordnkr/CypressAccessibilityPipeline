# CypressAccessibilityPipeline
![Accessibility Tests](https://github.com/jordnkr/CypressAccessibilityPipeline/actions/workflows/main.yml/badge.svg?branch=main)

Hi! This is a demo application. It's a CI/CD pipeline demonstration, using GitHub Actions to run accessibility with Cypress.io and the [axe-core](https://github.com/dequelabs/axe-core) library whenever new code is written for the associated web app. Cypress is embedded with the development code for ease of test writing/running.



## Installation
To get this application up and running, you will need [NPM](https://www.npmjs.com/) installed. After that, you can do the following:

- clone the repo to a local directory
- open a new command window and change directory to your cloned path: `cd /your/cloned/directory/path`
- use the command: `npm install`

> **Note:** If you incorporate cypress tests with your own project, and you already have your own local server configured, you do not need to do this part. You will just need to update the `'baseUrl'` variable in the `cypress.json` file to point at your localhost URL.

## Server and Tests
In order to run the tests, you will first need to start an HTTP server.

### Starting the Server
This can be accomplished using [http-server](https://www.npmjs.com/package/http-server). It was installed with the dev dependencies, so all you need to do is:

- change directory to your cloned path: `cd /your/cloned/directory/path`
- use the command: `npx http-server`

You can now move on to running the Cypress accessibility tests!

### Running Tests from a GUI
To open the Cypress GUI and run the tests from within a rendered browser:

- Open a new command window (unique from the one the server is running on) and use the command: `npx cypress open`

> **Note:**  depending on your machine, initial startup of Cypress can take a bit of time.

### Running Tests via CLI
To run the test from the command line:
- Open a new command window (unique from the one the server is running on) and use the command: `npx cypress run`


## Test Results

- **Cypress via GUI**: Tests run in the Cypress GUI display results in the rendered browser. To see specifics of an error, open the browser's developer console, and click on the error. Additional details will be output to the console.
- **Cypress via CLI**: By default, this project will output the test results to the command line window. However, it is configured to allow for JSON and/or HTML reports of the test results, should those be needed.
    - In the `reporter.json` file, set the `'html'` and/or `'json'` values to `true` to generate report files. `'overwrite'` can also be set to `true`/`false` depending on if you want to keep unique reports for each run.
    - The reports are kept in the `./cypress/reports/mochawesome` directory by default. This can also be changed in the `reporter.json` file.

## Test Implementation Specifics
***coming soon***