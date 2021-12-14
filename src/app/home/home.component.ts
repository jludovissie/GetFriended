import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../shared/post.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShown = false;
  posts : Observable<Post[]>
  users : Observable<User[]>
  user_Id

  constructor(private post: PostService,
              private user: UserService,
              private route: ActivatedRoute) {
    this.users = user.user$.pipe(tap(data => {
      console.log('working')
    } ))
   }

  ngOnInit() {}

  createPost(){
    this.isShown = ! this.isShown;
 }
 onSubmit(newPost){
   this.user.addPosts(newPost.value);

 }
 onLiked(i: Number){
  this.user.likePost(i);

 }

 goToUser() {
   this.route.params.subscribe(params => {
     this.user_Id = params["id"]
   })

 }
 onDisliked(i : number){
  this.user.dislikePost(i);

 }

}
