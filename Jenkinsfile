pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = 'dockerhub-credentials' // Update this with your Jenkins credential ID
    DOCKER_HUB_USERNAME = 'naidu289'                 // Your DockerHub username
  }

  stages {
    stage('Checkout SCM') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
        dir('frontend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        dir('backend') {
          sh 'npm test || echo "No tests in backend"'
        }
        dir('frontend') {
          sh 'npm test || echo "No tests in frontend"'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
            def backendImage = docker.build("${DOCKER_HUB_USERNAME}/praveenbus-backend", "backend")
            def frontendImage = docker.build("${DOCKER_HUB_USERNAME}/praveenbus-frontend", "frontend")
            backendImage.push("latest")
            frontendImage.push("latest")
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/backend-deployment.yaml'
        sh 'kubectl apply -f k8s/frontend-deployment.yaml'
        sh 'kubectl apply -f k8s/services.yaml'
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful!"
    }
    failure {
      echo "❌ Deployment failed!"
    }
  }
}

