//const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "5j8y6r",
  e2e: {
    baseUrl: 'https://stage-v3-1-0-1.coredirection.com/',
    viewportWidth: 1024,
    viewportHeight: 786,
    pageLoadTimeout: 50000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
     // specPattern: "cypress/e2e/*.feature",
    
  },
  
});

