import { Injectable } from "@angular/core";
import { Post } from "../post.model";
import { Observable, BehaviorSubject  } from "rxjs";


@Injectable({
  providedIn:'root'
})



export class PostService{

  private post:  Post[] = [
    {username: 'jollyjordan', post:'I am cool', likes: 0, dislikes: 0 },
    {username: 'happyhannah', post:'I am happy', likes: 0 , dislikes: 0 },
    {username:'niftynancy', post:'I am nifty', likes: 0, dislikes: 0  },
    {username:'bestiebri' , post: 'I am your bestie', likes: 0 , dislikes: 0 }
  ];
public post$: Observable<Post[]>
private postSub: BehaviorSubject<Post[]> = new BehaviorSubject(this.post)
constructor(){
  this.post$ = this.postSub.asObservable()


}
addPosts(newPost){
  // console.log(newPost)
  // newPost.likes = 0;
  // newPost.dislikes = 0;
  // this.post.push(newPost)
  // console.log({...newPost, likes: 0, dislikes: 0})

  this.post.push({...newPost, likes: 0, dislikes: 0})

  this.postSub.next(this.post)


}
likePost(i){
this.post[i] = {...this.post[i], likes: this.post[i].likes + 1};
this.postSub.next(this.post);
console.log(this.post)
}
dislikePost(i){
this.post[i] = {...this.post[i], dislikes: this.post[i].dislikes + 1};
this.postSub.next(this.post);
console.log(this.post)
}

getPostsByUser(username) {
  return this.post.filter(p => p.username === username)
}
}
