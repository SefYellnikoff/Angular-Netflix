import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser: User;

  constructor(private localStorage: LocalStorageService) { }

  login() {
    this.loggedUser = {
      id: 1,
      firstname: 'Sefora M.',
      lastname: 'Maganuco',
      favoritesFilm: []
    }

    this.localStorage.store('user', this.loggedUser);
  }

  logout() {
    this.loggedUser = null;
    this.localStorage.clear('user');
  }

  getLoggedUser() {
    this.loggedUser = this.localStorage.retrieve('user');
  }
}
