# CypressFrameworkTS

### Summary

CypressFrameworkTS is a project for automated testing of the https://telnyx.com/ website, created using the Cypress framework.

Links to test cases
https://docs.google.com/spreadsheets/d/12FflRubenA8S0fRCk16NQL79qIuf5LJbfKqKpit1dFk/edit?usp=sharing

### Requirements

Node.js,
npm,
Cypress,
Git

### Steps to install

1.  Clone the repository:

        git clone https://github.com/mafka0903/CypressFrameworkTS.git

2.  Navigate to the project folder:

        cd CypressFrameworl

3.  Install dependencies:

        npm install

### Steps to launch

1.  Run all tests:

        npx cypress run

2.  Run tests in headed mode:

        npx cypress run --headed

3.  Open Cypress Launchpad:

        npx cypress open

### Generating Allure Report

        npx cypress run --browser chrome --env allure=true

        npx allure generate allure-results --clean -o allure-report

Open report in browser:

        npx allure open allure-report

Reports also avaliable on GitHub pages https://mafka0903.github.io/CypressFrameworkTS/
