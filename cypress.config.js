const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    viewportWidth: 1920,
    viewportHeight: 800,
    chromeWebSecurity: false,
    retries: 0,
    defaultCommandTimeout: 5000,
    videosFolder: '/cypress/videos',
    screenshotsFolder: '/cypress/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
