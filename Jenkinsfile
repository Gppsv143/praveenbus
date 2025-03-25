pipeline {
    agent any

    environment {
        IMAGE_NAME = "naidu289/praveenbus-backend"
        K8S_DEPLOYMENT = "praveenbus-deployment.yaml"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/praveenbus-backend.git'
            }
        }

        stage('Build with Maven') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker push $IMAGE_NAME:latest'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f $K8S_DEPLOYMENT'
            }
        }
    }
}
