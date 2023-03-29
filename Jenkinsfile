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
                sh 'npm ci'
                sh 'npx codeceptjs run --config serenity.conf.js'
            }
        }
        stage('Pa11y Tests') {
            steps {
                sh 'node pa11y-test.js'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*.html', fingerprint: true
            }
        }
}
