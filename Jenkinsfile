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
                    rm -rf /root/nginx/www/react-mixture/*
                    cp ./build/* /root/nginx/www/react-mixture
                '''  
            }
        }
    }
}