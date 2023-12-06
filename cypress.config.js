const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
  video: false,
  projectId: '8kfavr',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://admin-demo.nopcommerce.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
  },
})
