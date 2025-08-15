# Exemplos de Pipelines para Cypress

![License](https://img.shields.io/badge/license-MIT-blue)
![Cypress Version](https://img.shields.io/badge/cypress-latest-brightgreen)
![Node Version](https://img.shields.io/badge/node-18.x-brightgreen)
![Status](https://img.shields.io/badge/status-exemplos%20não%20testados-yellow)

⚠️ **AVISO IMPORTANTE**

Este repositório contém exemplos de configurações de diferentes pipelines de CI/CD otimizados para projetos Cypress. Os arquivos de pipeline apresentados aqui são **APENAS EXEMPLOS DIDÁTICOS** e **NÃO FORAM TESTADOS** em ambiente real. Eles servem como referência e ponto de partida para implementação, mas podem necessitar de ajustes e validações antes do uso em produção.

Recomenda-se:
- Testar cada pipeline em ambiente de desenvolvimento antes de usar em produção
- Ajustar as configurações conforme as necessidades específicas do seu projeto
- Verificar a documentação oficial de cada plataforma de CI/CD para as práticas mais atuais
- Validar as variáveis de ambiente e secrets necessários para cada pipeline

## Recursos Comuns

Todos os pipelines compartilham características essenciais:
- Execução em Node.js 18.x
- Cache de dependências npm e Cypress
- Execução paralela de testes
- Relatórios e artefatos
- Suporte a múltiplos browsers
- Retry em caso de falhas
- Notificações configuráveis

## Integração Contínua

### Jenkins (`Jenkinsfile`)

Pipeline configurado com Docker usando a imagem `cypress/base:latest`, incluindo:
- Cache do npm para otimização
- Execução paralela de testes em Chrome e Firefox
- Relatórios Cucumber
- Arquivamento de artefatos
- Timeout e colorização do console
- Limpeza automática do workspace

### Azure Pipelines (`azure-pipelines.yml`)

Pipeline moderno com stages bem definidos:
- **Setup**: Instalação e cache otimizado
- **Lint**: Análise de código
- **Test**: Execução paralela em 3 agentes
- **Report**: Geração e publicação de relatórios
- **Notify**: Sistema de notificações

Recursos específicos:
- Integração com Azure Static Web Apps para relatórios
- Path filters para otimização de triggers
- Parâmetros para ambiente e browser
- Cache em dois níveis (npm e Cypress)
- Publicação de resultados JUnit
- Armazenamento de screenshots e vídeos

### GitHub Actions (`workflows/github_actions.yaml`)

Workflow completo com:
- Jobs especializados para cada função
- Execução em Ubuntu 22.04
- Cache em múltiplos níveis
- Paralelização em 3 containers por browser
- Integração com Cypress Dashboard
- Deploy de relatórios no GitHub Pages
- Suporte a múltiplos ambientes (prod/staging/dev)
- Execução manual, agendada ou por eventos

Recursos de CI:
- Verificação de código com ESLint
- Retry automático em falhas
- Upload de artefatos por container
- Relatórios combinados
- Notificações configuráveis

### GitLab CI/CD (`.gitlab-ci.yml`)

Pipeline otimizado com:
- Cache de dependências e Cypress
- Execução em múltiplos browsers
- Páginas GitLab para relatórios
- Artefatos com screenshots e vídeos
- Expiração configurável de artefatos
- Stages bem definidos
- Cache eficiente entre jobs

### CircleCI (`.circleci/config.yml`)

Configuração profissional usando orbs oficiais:
- Executor dedicado com recursos otimizados
- Workspace persistente entre jobs
- Armazenamento de resultados e artefatos
- Execução paralela em múltiplos browsers
- Dependências entre jobs para otimização
- Orbs oficiais do Cypress e Node

### Bitbucket Pipelines (`bitbucket-pipelines.yml`)

Pipeline robusto com:
- Definições reusáveis de steps
- Cache de dependências
- Execução paralela de testes
- Relatórios JUnit
- Deploy automático de relatórios para S3
- Configuração específica para branch main
- Pipes oficiais do Atlassian

## Uso

1. Escolha o pipeline que melhor se adapta à sua plataforma
2. Copie o arquivo de configuração correspondente
3. Ajuste as variáveis de ambiente e secrets necessários
4. Configure os triggers conforme sua necessidade
5. Personalize os relatórios e notificações

## Requisitos

- Node.js 18.x
- npm ou yarn
- Cypress
- Acesso à plataforma de CI/CD escolhida

## Variáveis de Ambiente

Cada pipeline pode requerer diferentes variáveis de ambiente. As mais comuns são:
- `CYPRESS_RECORD_KEY`: Para integração com Cypress Dashboard
- `GITHUB_TOKEN`: Para operações no GitHub
- `AWS_ACCESS_KEY_ID`: Para deploy no S3 (Bitbucket)
- `STATIC_WEB_APP_TOKEN`: Para Azure Static Web Apps

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.