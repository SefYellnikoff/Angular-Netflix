import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/User';
import { LocalStorageService } from 'ngx-webstorage';
import { Film } from '../models/Film';
import { FilmService } from './film.service';


const USERS: User[] = [
  {
    id: 1,
    username: 'sef',
    password: 'netflix',
    firstname: 'Sefora',
    lastname: 'Mag',
    favoritesFilm: []
  },
  {
    id: 2,
    username: 'heisenberg',
    password: 'methflix',
    firstname: 'Walter',
    lastname: 'White',
    favoritesFilm: []
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  loggedUser: User;
  userl: User;
  color: boolean;

  constructor(private localStorage: LocalStorageService, private filmService: FilmService) { }


  logout() {
    this.loggedUser = null;
    this.localStorage.clear('user');
  }

  getLoggedUser() {
    this.loggedUser = this.localStorage.retrieve('user');
  }

  login(username: string, password: string): boolean {
    this.loggedUser = USERS.find(x => x.username == username && x.password == password);
    this.localStorage.store('loggedUser', this.loggedUser);
    return this.loggedUser != null;

  }


 changeColor() : void {
    this.color = this.localStorage.store('heart', this.color);
  }

  addFavorite(user: User, film: Film): boolean {

    this.userl = USERS.find(x => x.favoritesFilm.push(film));
    console.log(USERS.find(x => x.favoritesFilm));
    console.log(this.userl);
    return true;
  }

 
}
