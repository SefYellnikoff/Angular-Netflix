import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FilmService } from '../services/film.service';
import { Film } from '../models/Film';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  validazioneLogin: boolean;
  username: string;
  password: string;

  lastFilms: Film[];
  bestFilms: Film[];


  

  constructor(
    public userService: UserService,
    private filmService: FilmService) { }


  ngOnInit() {
    this.userService.getLoggedUser();
    this.lastFilms = this.filmService.getLastFilms();
    this.bestFilms = this.filmService.getBestFilms();

  }
  login() {
    this.validazioneLogin = this.userService.login(this.username, this.password);
  }

}
