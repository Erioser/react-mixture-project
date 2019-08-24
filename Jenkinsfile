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
                    // yarn config set registry 'https://registry.npm.taobao.org' -g
                    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
                    yarn
                '''
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}