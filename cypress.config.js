const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5j8y6r",
  e2e: {
    viewportWidth: 1024,
    viewportHeight: 786,
    pageLoadTimeout: 50000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    
  },
  
});

