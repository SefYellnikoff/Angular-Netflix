import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/User';
import { LocalStorageService } from 'ngx-webstorage';
import { Film } from '../models/Film';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const USERS: User[] = [
  {
    id: 1,
    username: 'sef',
    password: 'netflix',
    firstname: 'Sefora',
    lastname: 'Mag',
    favoritesFilm: [],
    token: ''
  },
  {
    id: 2,
    username: 'heisenberg',
    password: 'methflix',
    firstname: 'Walter',
    lastname: 'White',
    favoritesFilm: [],
    token:''
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  loggedUser: User;
  userl: User;
  color: boolean;

  constructor(private localStorage: LocalStorageService,private http: HttpClient) { }


  logout() {
    this.loggedUser = null;
    this.localStorage.clear('loggedUser');
  }

  getLoggedUser() {
    this.loggedUser = this.localStorage.retrieve('loggedUser');
    return this.loggedUser;
  }

  login(username: string, password: string): boolean {
    this.http.post<User>('http://netflix.cristiancarrino.com/user/login.php',{
      'username': username,
      'password': password
    }).subscribe(response =>{console.log(response);
      this.loggedUser=response;
   this.localStorage.store('loggedUser',this.loggedUser);
    });
   
    return this.loggedUser !=null;

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
