import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   { path: 'user', component: UserComponent },
    // ],
  },
  { path: 'user/:id', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'suggestedFriends', component: SuggestedFriendsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
