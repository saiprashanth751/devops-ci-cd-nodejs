pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/saiprashanth751/devops-ci-cd-nodejs.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-node-app .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker rm -f devops-demo || true
                docker run -d -p 3000:3000 --name devops-demo devops-node-app
                '''
            }
        }
    }
}
