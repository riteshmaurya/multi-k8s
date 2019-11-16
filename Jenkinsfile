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
        stage('Upload multi-client to docker'){
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/multi-client:${BUILD_NUMBER} ./client"

                sh "docker push riteshmaurya/multi-client:latest" 
            } 
            }
        }
        stage('Upload multi-nginx to docker'){
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/multi-nginx:${BUILD_NUMBER} ./"

                sh "docker push riteshmaurya/multi-nginx:latest" 
            } 
            }
        }
        stage('Upload multi-api to docker'){
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/multi-api:${BUILD_NUMBER} ./server"

                sh "docker push riteshmaurya/multi-api:latest" 
            } 
            }
        }   
        stage('Upload multi-worker to docker'){
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/multi-worker:${BUILD_NUMBER} ./worker"

                sh "docker push riteshmaurya/multi-worker:latest" 
            } 
            }
        }                  
    }
}