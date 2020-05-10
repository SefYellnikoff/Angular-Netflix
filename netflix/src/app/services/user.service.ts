import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { LocalStorageService } from 'ngx-webstorage';


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

  constructor(private localStorage: LocalStorageService) { }


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
}
