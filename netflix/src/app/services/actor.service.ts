import { Injectable } from '@angular/core';
import { Actor } from '../models/Actor';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

const ACTORS: Actor[] = [
  {
    id: 23,
    firstname: 'George',
    lastname: 'Clooney',
    
  },
  {
    id: 33,
    firstname: 'Jim',
    lastname: 'Carry',
    
  },
  {
    id: 63,
    firstname: 'Quentin',
    lastname: 'Tarantino',
    
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
    
    };
  }

  editActor(): void {
    this.localStorage.store('actors', this.actors);
    this.selectedActor = null;
  }


}
