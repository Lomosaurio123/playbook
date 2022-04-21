
class User {
    constructor(user,bio,age,followers,following,tweets,retweets) {
        this.user = user
        this.bio = bio
        this.age = age
        this.followers = followers
        this.following = following
        this.tweets = tweets
        this.retweets = retweets
    }

    getGeneralInfo() {
        return `the user: ${this.user} with the bio: ${this.bio} has ${this.followers} followers and is following ${this.following} users`
    }

    getTweets() {
        return `tweets: ${this.tweets} and retweets: ${this.retweets}`
    }

}

const user = new User("Lomosaurio123","This is my bio",21,125,1000,21,10)
console.log("USER CLASS:")
console.log(user.getGeneralInfo())
console.log(user.getTweets())

class TrendingTopic {
    constructor(name,tweets,retweets,position){
        this.name = name
        this.tweets = tweets
        this.retweets = retweets
        this.position = position
    }

    getGeneralInfo() {
        return `the trending ${this.name} has the position: ${this.position}`
    }

    getTweets() {
        return `tweets: ${this.tweets} and retweets: ${this.retweets}`
    }
}

const trendig = new TrendingTopic("Ucrania",10120,100000,1)
console.log("\nTRENDING CLASS:")
console.log(trendig.getGeneralInfo())
console.log(trendig.getTweets())

class OtherUser {
    constructor(user,following,follow_back,followers,bio){
        this.user = user
        this.following = following
        this.follow_back = follow_back
        this.followers = followers
        this.bio = bio
    }

    getGeneralInfo() {
        return `The user ${this.user} has ${this.followers} with the bio: ${this.bio}`
    }

    getFollowing() {
        return `follows you back: ${this.follow_back} follows: ${this.following}` 
    }

}

const other = new OtherUser("Elon Musk",true,false,"101M","Tesla is the sh*t")
console.log("\nOTHER USERS CLASS:")
console.log(other.getFollowing())
console.log(other.getGeneralInfo())