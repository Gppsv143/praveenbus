pipeline {
    agent any

    environment {
        APP_NAME = "praveenbus"
        BACKEND_IMAGE = "Gppsv143/praveenbus-backend"
        FRONTEND_IMAGE = "Gppsv143/praveenbus-frontend"
    }

    stages {
        stage("Checkout") {
            steps {
                git "https://github.com/Gppsv143/praveenbus.git"
            }
        }

        stage("Install Dependencies") {
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage("Run Tests") {
            steps {
                script {
                    sh "npm test"
                }
            }
        }

        stage("Build Backend Docker Image") {
            steps {
                script {
                    sh "docker build -t $BACKEND_IMAGE ."
                }
            }
        }

        stage("Build Frontend Docker Image") {
            steps {
                script {
                    sh "docker build -t $FRONTEND_IMAGE ./frontend"
                }
            }
        }

        stage("Push Docker Images") {
            steps {
                script {
                    sh "docker push $BACKEND_IMAGE"
                    sh "docker push $FRONTEND_IMAGE"
                }
            }
        }

        stage("Deploy to Kubernetes") {
            steps {
                script {
                    sh "kubectl apply -f k8s/deployment.yaml"
                    sh "kubectl apply -f k8s/service.yaml"
                }
            }
        }
    }
}
