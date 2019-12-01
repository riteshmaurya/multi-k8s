#!/usr/bin/env groovy
pipeline {
    environment {
    registry = "riteshmaurya"
    registryCredential = 'dockerhub'
  }
  agent none
    // agent { docker { image 'node:alpine'} true }
    stages {
        // stage('Test') {
        //     steps {
        //         sh 'node --version'
        //     }
        // }
        stage('Upload multi-client to docker'){
            agent {
                dockerfile{
                    dir './client'
                }
            }
            steps {
            withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                sh "docker build -t riteshmaurya/multi-client:${BUILD_NUMBER} ./client"

                sh "docker push riteshmaurya/multi-client:${BUILD_NUMBER}" 
            } 
            }
        }
        stage('Upload multi-nginx to docker') {
            agent {
                dockerfile{
                    dir './nginx'
                }
            }
            steps{                
            withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                sh "docker build -t riteshmaurya/multi-nginx:${BUILD_NUMBER} ./nginx"

                sh "docker push riteshmaurya/multi-nginx:${BUILD_NUMBER}" 
            } 
            }
        }
        stage('Upload multi-api to docker'){
           agent {
                dockerfile{
                    dir './server'
                }
            }            
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                sh "docker build -t riteshmaurya/multi-api:${BUILD_NUMBER} ./server"

                sh "docker push riteshmaurya/multi-api:${BUILD_NUMBER}" 
            } 
            }
        }   
        // ss
        stage('Upload multi-worker to docker') {
           agent {
                dockerfile{
                    dir './worker'
                }
            }            
            steps{
            withDockerRegistry([credentialsId: "dockerhub", url: ""]){
                sh "docker build -t riteshmaurya/multi-worker:${BUILD_NUMBER} ./worker"

                sh "docker push riteshmaurya/multi-worker:${BUILD_NUMBER}" 
            } 
            }
        }                  
    }
}