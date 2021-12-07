import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  suggestedfriends: User[] = [
    new User(
      '',
      '',
      '0',
      'JohnnyTsunami',
      'I ride waves!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Onrus_Surfer.jpg/640px-Onrus_Surfer.jpg'
    ),
    new User(
      '',
      '',
      '1',
      'JohnDoe43',
      'I like computer!!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Egyptian_Surfer.jpg/640px-Egyptian_Surfer.jpg'
    ),
    new User (
      '',
      '',
      '2',
      'JimJam43',
      'I enjoy all things Jams',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg/640px-Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg',
    ),
    new User(
      '',
      '',
      '3',
      'AshelyMyers23',
      'I enjoy art!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg/640px-Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg'
    ),
  ];

  constructor() {}
}
