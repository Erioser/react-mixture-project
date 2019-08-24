pipeline {
    agent {
        docker {
            image 'node:8.16.1-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh '''      
                    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
                    yarn
                '''
            }
        }
        stage('Deliver') { 
            steps {
                sh '''
                    npm run build
                    rm -rf ~/nginx/www/react-mixture/*
                    cp dist/*  ~/nginx/www/react-mixture
                ''' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}