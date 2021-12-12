import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggested-friends',
  templateUrl: './suggested-friends.component.html',
  styleUrls: ['./suggested-friends.component.css']
})
export class SuggestedFriendsComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(){
    this.users = this.userService.users
  }

  gotoprofile(id) {
    this.router.navigate(['/user']);
  }

  onAddFriend() {}
}
