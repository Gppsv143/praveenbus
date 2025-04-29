pipeline {
    agent any

    environment {
        APP_NAME = "praveenbus"
        BACKEND_IMAGE = "naidu289/praveenbus-backend"
        FRONTEND_IMAGE = "naidu289/praveenbus-frontend"
        REGISTRY = "docker.io" // Docker Hub
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Gppsv143/praveenbus.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install backend dependencies
                    dir('backend') {
                        sh 'npm install'
                    }
                    // Install frontend dependencies
                    dir('frontend') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo "Skipping tests for now"
                    // Uncomment below code to run tests when ready
                    // Run backend tests
                    // dir('backend') {
                    //     sh 'npm test'
                    // }
                    // Run frontend tests
                    // dir('frontend') {
                    //     sh 'npm test'
                    // }
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('backend') {
                        sh "docker build -t ${BACKEND_IMAGE}:latest ."
                    }
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('frontend') {
                        sh "docker build -t ${FRONTEND_IMAGE}:latest ."
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'dockerhub-credentials', url: "https://${REGISTRY}"]) {
                        sh "docker push ${BACKEND_IMAGE}:latest"
                        sh "docker push ${FRONTEND_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Apply Kubernetes deployment files
                    sh 'kubectl apply -f k8s/'
                }
            }
        }
    }
}

