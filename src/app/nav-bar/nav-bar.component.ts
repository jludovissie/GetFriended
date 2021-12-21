import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  user
  collapsed=true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.loggedIn = !user;
      this.user = user;
      console.log(this.user)
    });
  }

  goToMyProfile() {
    this.route.params.subscribe(params => {
      // this.myProfile = params["id"]
    })
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signup']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

getRoute(){
return "user/happyhannah"
}

}
