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
                    rmdir /s /q /root/nginx/www/react-mixture/
                    copy ./build/* /root/nginx/www/react-mixture
                '''  
            }
        }
    }
}