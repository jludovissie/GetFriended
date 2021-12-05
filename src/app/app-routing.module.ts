import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherUserComponent } from './another-user/another-user.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'suggestedFriends', component: SuggestedFriendsComponent},
  { path: 'my-Profile', component: MyProfileComponent},
  { path: 'anotherUser', component: AnotherUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
