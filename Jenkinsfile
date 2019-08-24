pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh ''
            }
        }
        stage('Deliver') { 
            steps {
                sh '''
                    cp ./build/* ~/nginx/www/react-mixture
                '''  
            }
        }
    }
}