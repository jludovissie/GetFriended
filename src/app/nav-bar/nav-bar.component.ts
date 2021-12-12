import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SignupComponent } from '../signup/signup.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn = false;
  private userSub: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.loggedIn = !user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signup']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
