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
                sh 'npx pa11y-ci --reporter html > pa11y-report.html'
            }
        }
        stage('Publish integration test results') {
            steps {
                junit 'output/result.xml'
            }
        }
        stage('Publish accessibility test results') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'pa11y-report.html',
                    reportName: 'Pa11y Accessibility Report',
                    reportTitles: 'Pa11y Report'
                ])
            }
        }
    }
}
