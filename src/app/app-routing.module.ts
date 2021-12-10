import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'suggestedFriends', component: SuggestedFriendsComponent},
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
