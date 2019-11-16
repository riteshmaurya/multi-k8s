#!/usr/bin/env groovy
pipeline {
    environment {
    registry = "riteshmaurya/complex"
    registryCredential = 'dockerhub'
  }
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Upload to docker'){
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/complex:${BUILD_NUMBER} ."

                sh "docker push riteshmaurya/complex:latest" 
            } 
            }
    
        }
    }
}