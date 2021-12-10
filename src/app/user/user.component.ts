import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PostService } from '../shared/post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  user_Id
  user
  posts

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private postService: PostService, ) { }

  ngOnInit(): void {
    this.route.params.subscribe (params => {
      this.user_Id = params["id"]
      this.user = this.userService.getUser(this.user_Id)
      this.posts = this.postService.getPostsByUser(this.user_Id);
  })
}
}

