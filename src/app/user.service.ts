import { Injectable } from '@angular/core';
import { User } from './shared/user/user.model';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User(
      'hannah@email.com',
      '0',
      'happyhannah',
      [],
      'I ride waves',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Onrus_Surfer.jpg/640px-Onrus_Surfer.jpg'
    ),
    new User(
      'jordan@email.com',
      '1',
      'jollyjordan',
      [],
      'I like computer!!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Egyptian_Surfer.jpg/640px-Egyptian_Surfer.jpg'
    ),
    new User(
      'nancy@email.com',
      '2',
      'niftynancy',
      [],
      'I enjoy all things Jams',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg/640px-Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg'
    ),
    new User(
      'bri@email.com',
      '3',
      'bestiebri',
      [],
      'I enjoy art!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg/640px-Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg'
    ),
  ];

  constructor() {}

  getUser(username) {
    const userIndex = this.users.findIndex((u) => u.username === username);
    return this.users[userIndex];
  }
}
