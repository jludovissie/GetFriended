import { Injectable } from "@angular/core";
import { Post } from "../post.model";

@Injectable()
export class PostService{
private post: Post[] = [
  {
    ID:'happyHannah',
    description: 'is happy'
  },
  {
    ID: 'coolGuy24',
    description: 'is cool'
    },


];



}
