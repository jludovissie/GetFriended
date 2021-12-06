import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestedfriendsService {
  suggestedfriends = [
    {
    ID: '0',
    name: 'JohnnyTsunami',
    description: 'I ride waves!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Onrus_Surfer.jpg/640px-Onrus_Surfer.jpg',
    },
    {
    ID: '1',
    name: 'JohnDoe43',
    description: 'I like computer!!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Egyptian_Surfer.jpg/640px-Egyptian_Surfer.jpg'
    },
    {
    ID: '2',
    name: 'JimJam43',
    description: 'I enjoy all things Jams',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg/640px-Pro_Surfers_Owen_Wright%2C_Gabriel_Medina_and_Miguel_Pupo_in_San_Francisco%2C_California_on_Nov._7th_2011._Photo_by_Ithaka_Darin_Pappas.jpg'
    },
    {
    ID: '3',
    name: 'AshleyMyers23',
    description: 'I enjoy art!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg/640px-Surfer_and_Northern_elephant_seal_at_Drakes_Beach.jpg'
    },

];

  constructor() { }
}
