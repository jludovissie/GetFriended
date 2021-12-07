import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-suggested-friends',
  templateUrl: './suggested-friends.component.html',
  styleUrls: ['./suggested-friends.component.css']
})
export class SuggestedFriendsComponent implements OnInit {
suggestedfriends: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.suggestedfriends = this.userService.suggestedfriends
  }


}
