const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://automationpratice.com.br",
    defaultCommandTimeout: 5000,
    //timeout baseD do Projeto
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
