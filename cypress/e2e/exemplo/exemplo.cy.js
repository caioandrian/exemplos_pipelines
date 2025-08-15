describe('Exemplo de Teste', () => {
  beforeEach(() => {
    // Visita a página de exemplo do Cypress
    cy.visit('https://example.cypress.io')
    
    // Garante que a página foi carregada
    cy.get('.banner').should('be.visible')
  })

  // Função auxiliar para navegar pelo menu
  const navigateToCommand = (command) => {
    // Scroll até o menu de comandos
    cy.get('.dropdown-toggle').contains('Commands').scrollIntoView()
      .should('be.visible')
      .click()

    // Aguarda o menu dropdown abrir
    cy.get('.dropdown-menu').should('be.visible')

    // Scroll até o item desejado e clica
    cy.get('.dropdown-menu').contains(command)
      .scrollIntoView()
      .should('be.visible')
      .click()
  }

  it('deve verificar o título da página', () => {
    cy.title().should('include', 'Cypress.io')
  })

  it('deve testar interações com formulário', () => {
    // Navega para Actions
    navigateToCommand('Actions')

    // Scroll até a seção de checkboxes
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .scrollIntoView()
      .should('be.visible')
      .check()
      .should('be.checked')

    // Scroll até a seção de radio buttons
    cy.get('.action-radios [type="radio"]')
      .first()
      .scrollIntoView()
      .should('be.visible')
      .check()
      .should('be.checked')

    // Scroll até o select e interage
    cy.get('.action-select')
      .scrollIntoView()
      .should('be.visible')
      .select('apples')
      .should('have.value', 'fr-apples')
  })

  it('deve testar comandos de clique', () => {
    // Navega para Actions
    navigateToCommand('Actions')

    // Scroll até o botão e realiza diferentes cliques
    cy.get('.action-btn')
      .scrollIntoView()
      .should('be.visible')
      .click()
      .should('be.visible')
      .dblclick()
      .should('be.visible')
      .rightclick()
  })

  it('deve demonstrar assertions de DOM', () => {
    // Navega para Querying
    navigateToCommand('Querying')

    // Scroll e verifica diferentes seletores
    cy.get('#query-btn')
      .scrollIntoView()
      .should('be.visible')
      .should('contain', 'Button')

    cy.get('.query-btn')
      .scrollIntoView()
      .should('be.visible')
      .should('contain', 'Button')
  })

  it('deve demonstrar retry-ability do Cypress', () => {
    // Navega para Assertions
    navigateToCommand('Assertions')

    // Scroll e verifica elementos
    cy.get('.assertions-link')
      .scrollIntoView()
      .should('be.visible')
      .should('have.class', 'active')
      .and('have.attr', 'href')
  })
})