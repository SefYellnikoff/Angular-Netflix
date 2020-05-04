import { Injectable } from '@angular/core';
import { Actor } from '../models/Actor';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

const ACTORS: Actor[] = [
  {
    id: 23,
    firstname: 'George',
    lastname: 'Clooney'
  },
  {
    id: 33,
    firstname: 'Jim',
    lastname: 'Carry'
  },
  {
    id: 63,
    firstname: 'Quentin',
    lastname: 'Tarantino'
  },
]

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  selectedActor: Actor;
  newActor: Actor;
  actors: Actor[];


  constructor(private localStorage: LocalStorageService) {}

  getActors(): Observable<Actor[]> {
    this.actors = this.localStorage.retrieve('actors') || ACTORS;
    return of(this.actors);
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
    this.saveActorInLocalStorage();
  }

  editActor() {
    this.selectedActor = null;
    this.saveActorInLocalStorage();
  }

  saveActorInLocalStorage() {
    this.localStorage.store('actors', this.actors);
  }
}
