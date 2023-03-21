pipeline {
  agent any
  stages {
    stage('Tests') {
      steps {
        sh 'npx codeceptjs run'
      }
    }

  }
}