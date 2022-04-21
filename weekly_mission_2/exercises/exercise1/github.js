const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   
   const issue = {
       title: "Recomendaciones",
       repositoryNameAssociated: repo.name,
       status: "open",
       numberOfComments: 10,
       labels: 3,
       author: repo.author,
       dateCreated: "10/04/2022",
       lastUpdated: "3 hours ago",
       getTitleAndAuthor: function(){
           return `Author: ${this.author} Title: ${this.title}`
       },
       getGeneralInfo: function() {
           return `this issue was created by ${this.author} with the name of ${this.title} that has ${this.numberOfComments} comments`
       }
   }

   console.log("\nISSUE: ")
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

   const pullRequest = {
       title: "Update in this module",
       branchName: "Settings",
       author: "Mauricio",
       dateCreated: "5/04/2022",
       status: "open",
       repositoryNameAssociated: repo.name,
       getStatus: function(){
           return `the pull request status is: ${this.status}`
       },
       getTitleAndAuthor: function(){
           return `Author: ${this.author} Title: ${this.title}`
       }
   }

   console.log("\nPullRequest:")
   console.log(pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAuthor())

