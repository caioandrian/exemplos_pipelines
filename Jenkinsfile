pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
            args '-v $HOME/.npm:/root/.npm'
        }
    }
    
    environment {
        NODE_VERSION = '18.x'
        CYPRESS_CACHE_FOLDER = '/root/.cache/Cypress'
    }
    
    options {
        timeout(time: 30, unit: 'MINUTES')
        ansiColor('xterm')
    }
    
    stages {
        stage('Setup') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Tests') {
            parallel {
                stage('Chrome Tests') {
                    steps {
                        sh 'npm run cy:run-chrome'
                    }
                }
                stage('Firefox Tests') {
                    steps {
                        sh 'npm run cy:run-firefox'
                    }
                }
            }
        }

        stage('Reports') {
            steps {
                sh 'npm run combine-reports'
                sh 'npm run generate-report'
            }
        }
    }
    
    post {
        always {
            script {
                // Publicar relatórios
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'report.html',
                    reportName: 'Cypress Report'
                ])
                
                // Arquivar artefatos
                archiveArtifacts(
                    artifacts: 'cypress/reports/**/*,cypress/screenshots/**/*,cypress/videos/**/*',
                    allowEmptyArchive: true
                )
            }
            // Limpar workspace
            cleanWs()
        }
    }
}