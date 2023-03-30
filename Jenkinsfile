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
                sh 'npx pa11y-ci --config .pa11yci.json --reporter pa11y-ci-reporter-html > pa11y-report.html'
            }
            post {
                always {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'pa11y-ci-report',
                        reportFiles: '**/*.html',
                        reportName: 'Pa11y Accessibility Report',
                        reportTitles: 'Report for URL'
          ])
        }
      }
        }
        stage('Publish integration test results') {
            steps {
                junit 'output/result.xml'
            }
        }
    }
}
