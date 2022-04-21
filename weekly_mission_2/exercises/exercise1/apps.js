//Twitter
const user = {
    user: "Lomosaurio123",
    bio: "Hello I like to use Twitter too much",
    age: 21,
    followers: 125,
    following: 1000,
    tweets: 31,
    retweets: 10,
    getGeneralInfo: function() {
        return `the user: ${this.user} with the bio: ${this.bio} has ${this.followers} followers and is following ${this.following} users`
    },
    getTweets: function() {
        return `tweets: ${this.tweets} and retweets: ${this.retweets}`
    }
}

console.log("USER:")
console.log(user.getGeneralInfo())
console.log(user.getTweets())

const trending_topic = {
    name: "Ucrania",
    tweets: 12341,
    retweets: 100000,
    position: 1,
    getGeneralInfo: function() {
        return `the trending ${this.name} has the position: ${this.position}`
    },
    getTweets: function() {
        return `tweets: ${this.tweets} and retweets: ${this.retweets}`
    }
}

console.log("\nTrending:")
console.log(trending_topic.getGeneralInfo())
console.log(trending_topic.getTweets())

const otherUser = {
    user: "Elon Musk",
    following: true,
    follow_back: false,
    followers: "101M",
    bio: "Tesla is the sh*t",
    getGeneralInfo: function() {
        return `The user ${this.user} has ${this.followers} with the bio: ${this.bio}`
    },
    getFollowing: function() {
        return `follows you back: ${this.follow_back} follows: ${this.following}` 
    }
}

console.log("\nUSER ELON:")
console.log(otherUser.getGeneralInfo())
console.log(otherUser.getFollowing())

//Facebook

 
const userF = {
    username: "Mauricio Gael Hernandez Lom",
    age: 21,
    friends: 1000,
    followers: 21,
    location: "Mexico",
    activeFoto: true,
    status: "Active",
    getGeneralInfo: function() {
        return `The user ${this.username} has ${this.followers} followers and is located in ${this.location}`
    },
    getActive: function() {
        return `${this.username} is ${this.status}`
    }
}

console.log("\nUSER FACEBOOK")
console.log(userF.getGeneralInfo())
console.log(userF.getActive())

const post = {
    hasPhoto: true,
    url: "https//asdadsasdasda.png",
    description: "Hahahaha lol",
    reactions: 21,
    comments: 5,
    status: "Public",
    getGeneralInfo: function() {
        return `the post has the description: ${this.description} and the status photo is: ${this.hasPhoto}`
    },
    getUrl: function() {
        return `the post has the photo with the url ${this.url}`
    }
}

console.log("\nPOST")
console.log(post.getGeneralInfo())
console.log(post.getUrl())

const biography = {
    description: "Hello I'm Mauricio I like to ....",  
    location: user.location,
    relationship: "In a relationship",
    school: "IPN",
    getGeneralInfo: function() {
        return `description: ${this.description}, location: ${this.location}, Relationship: ${this.relationship}, School: ${this.school}`
    }
}

console.log("\nBIO:")
console.log(biography.getGeneralInfo())