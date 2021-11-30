import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'suggestedFriends', component: SuggestedFriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
