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
                sh 'npx codeceptjs run'
            }
        }
        stage('Pa11y Tests') {
            steps {
                sh 'node pa11y-test.js'
            }
        }
    }
}
