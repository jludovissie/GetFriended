import { Component, OnInit } from '@angular/core';
import { SuggestedfriendsService } from '../suggestedfriends.service';

@Component({
  selector: 'app-suggested-friends',
  templateUrl: './suggested-friends.component.html',
  styleUrls: ['./suggested-friends.component.css']
})
export class SuggestedFriendsComponent implements OnInit {
suggestedfriends: {ID: string, name: string, description: string}[] = [];

  constructor(private suggestedfriendsservice: SuggestedfriendsService) { }

  ngOnInit(){
    this.suggestedfriends = this.suggestedfriendsservice.suggestedfriends
  }


}
