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
                    copy ./build/* /root/nginx/www/react-mixture
                '''  
            }
        }
    }
}