import { defineConfig } from "cypress";

import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: "https://telnyx.com",
    retries: 3,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    specPattern: "cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}",
  },
});
