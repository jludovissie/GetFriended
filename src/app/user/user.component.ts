import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.users = this.userService.users
    this.route.params.subscribe((params)=>{
      this.users.indexOf = params['id'];
    });
  }


}


