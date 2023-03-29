pipeline {
    agent any
    tools {nodejs "npm"}
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install pa11y'
            }
        }
        stage('CodeceptJS Tests') {
            steps {
                sh 'npx codeceptjs run --plugins serenity'
            }
            post {                
                success {
                   publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: './reports', reportFiles: 'index.html', reportName: 'Serenity Report', reportTitles: '', useWrapperFileDirectly: true])     
                }
            }
        }
        stage('Pa11y Tests') {
            steps {
                sh 'node pa11y-test.js'
            }
        }
    }
}