pipeline {
    agent any
    tools {nodejs "npm"}
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install pa11y'
                sh 'npm ci'
            }
        }
        stage('CodeceptJS Tests') {
            steps {
                sh 'npx codeceptjs run'
            }
        }
        stage('Run Pa11y Tests') {
            steps {
                sh 'npx pa11y-ci --config .pa11yci.json --reporter ./node_modules/pa11y-ci-reporter-html > pa11y-report.html'
            }
        }
        stage('Publish integration test results') {
            steps {
                junit 'output/result.xml'
            }
        }
        stage('Publish Pa11y report') {
            steps {
                archiveArtifacts 'pa11y-report.html'
            }
        }
    }
}
