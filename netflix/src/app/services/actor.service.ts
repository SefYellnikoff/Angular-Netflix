import { Injectable } from '@angular/core';
import { Actor } from '../models/Actor';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

const ACTORS: Actor[] = [
  {
    id: 23,
    firstname: 'George',
    lastname: 'Clooney',
    imgActor: 'https://pbs.twimg.com/profile_images/704366711739387904/dBlzfG_S.jpg'
  },
  {
    id: 33,
    firstname: 'Jim',
    lastname: 'Carry',
    imgActor: ''
  },
  {
    id: 63,
    firstname: 'Quentin',
    lastname: 'Tarantino',
    imgActor: ''
  },
]

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actors: Actor[];
  selectedActor: Actor;
  newActor: Actor = {
    firstname: '',
    lastname: '',
    imgActor: ''
  };
  constructor(private localStorage: LocalStorageService) { }
  
  getActors(): Actor[] {
    this.actors = this.localStorage.retrieve('actors') || ACTORS;
    return this.actors;
  }


  addActor(): void {
    this.actors.push(this.newActor);
    this.localStorage.store('actors', this.actors);
    this.newActor = {
      firstname: '',
      lastname: '',
      imgActor: ''
    };
  }

  editActor(): void {
    this.localStorage.store('actors', this.actors);
    this.selectedActor = null;
  }


}
