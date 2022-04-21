
class Repo {
    constructor(name,author,language,numberOfCommits,star,forks,issues_open,issue_close) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.star = star
        this.forks = forks
        this.issues_close = issue_close
        this.issues_open = issues_open
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

repo = new Repo("LaunchX","carlogilmar","JavaScript",100,199,299,10,10)
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

class Issue extends Repo {
    constructor(name,title,status,numberOfComments,labels,author,dateCreated,lastCreated){
        super(name)
        this.title = title
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.authorissue = author
        this.dateCreated = dateCreated
        this.lastCreated = lastCreated
    }

    getTitelAndAuthor() {
        return `Title: ${this.title} and Author: ${this.authorissue}`
    }

    getGeneralInfoIssue(){
        return `The issue ${this.title} created in the repository ${this.name} by ${this.authorissue}`
    }
}

const issue = new Issue(repo.name,"Problem with this","open",11,10,"Lomosaurio123","10/4/2022","11/4/2022")
console.log("\n ISSUES: ")
console.log(issue.getTitelAndAuthor())
console.log(issue.getGeneralInfoIssue())

class PullRequest extends Repo{
    constructor(title,author,branchName,dateCreated,status,name){
        super(name)
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
    }

    getStatus() {
        return `the status is: ${this.status}`
    }

    getTitleAndAuthor() {
        return `Title: ${this.title} Author ${this.author}`
    }
}

const pull = new PullRequest("Config finished","Mauricio","Configuration","10/4/2022","Open",repo.name)
console.log("\nPULL REQUEST:")
console.log(pull.getStatus())
console.log(pull.getTitleAndAuthor())