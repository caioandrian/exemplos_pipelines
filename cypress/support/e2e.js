// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

// Comando personalizado para log
Cypress.Commands.add('logInfo', (message) => {
  cy.log(`Info: ${message}`)
  console.log(`Info: ${message}`)
})

// Comando personalizado para verificar elemento e seu texto
Cypress.Commands.add('shouldHaveText', { prevSubject: true }, (subject, text) => {
  cy.wrap(subject).should('be.visible').and('contain', text)
})

// Configurações globais
beforeEach(() => {
  // Reset do estado entre testes
  cy.logInfo('Iniciando teste')
})

afterEach(() => {
  // Limpeza após cada teste
  cy.logInfo('Finalizando teste')
})
