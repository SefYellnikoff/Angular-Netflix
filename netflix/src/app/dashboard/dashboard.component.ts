import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FilmService } from '../services/film.service';
import { Film } from '../models/Film';
import { User } from '../models/User';

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
  loggedUserL: User;
  film: Film;

  constructor(
    public userService: UserService,
    private filmService: FilmService) { }


    ngOnInit() {
      this.userService.getLoggedUser();

      this.filmService.getFilms().subscribe(response => {
        this.lastFilms = this.filmService.getLastFilms(response);
        this.bestFilms = this.filmService.getBestFilms(response);
      });
    }

    movieC(film) {
      film.active = !film.active

    }
    login() {
      this.validazioneLogin = this.userService.login(this.username, this.password);
    }
    setVote(film: Film, vote: number) {
      film.stars = vote;
    }

}

