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
                    rm -rf ~/nginx/www/react-mixture/*
                    cp ./build/*  ~/nginx/www/react-mixture
                '''  
            }
        }
    }
}