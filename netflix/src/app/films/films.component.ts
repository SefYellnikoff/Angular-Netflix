import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/Film';
import { Actor } from '../models/Actor';
import { Genre } from '../models/Genre';
import { ActorService } from '../services/actor.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
 
  titleFilm = 'Sono il film component';
  films: Film[];
  actors: Actor[];
  searchText = '';


  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getFilms();
  }

  getCastList(cast: Actor[]): string {
    return cast.map(x => x.firstname + ' ' + x.lastname).join(', ');//CRI
  }
  //TODO: getImgActors

  getGenreList(genres: Genre[]): string {
    return genres.map(x => x.name).join(', ');
  }

  selectThisFilm(film: Film): void {
    event.stopPropagation();
    this.filmService.selectedFilm = film;
  }
  setVote(film: Film, vote:number){
    film.stars= vote;
  }
}
