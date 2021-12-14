export class Post {
    constructor(
        // should be userId
        public username: string,
        public post: string,
        public image: string,
        public likes: number,
        public dislikes: number)
     {}

}


// posts belongs to a user
// post has the user id
// users have many posts
