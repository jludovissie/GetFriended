import { Injectable } from "@angular/core";
import { Post } from "../post.model";
import { Observable, BehaviorSubject  } from "rxjs";


@Injectable({
  providedIn:'root'
})



export class PostService{

  private post:  Post[] = [
    {username: 'jollyjordan', post:'I am cool', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Onrus_Surfer.jpg/640px-Onrus_Surfer.jpg' , likes: 0, dislikes: 0 },
    {username: 'happyhannah', post:'I am happy', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Egyptian_Surfer.jpg/640px-Egyptian_Surfer.jpg', likes: 0 , dislikes: 0 },
    {username:'niftynancy', post:'I am nifty', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg/640px-Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg' , likes: 0, dislikes: 0  },
    {username:'bestiebri' , post: 'I am your bestie', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg/640px-Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg', likes: 0 , dislikes: 0 }
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
