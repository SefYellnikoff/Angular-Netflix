import { Injectable } from '@angular/core';
import { Film } from '../models/Film';
import { from, Observable, of } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

const FILMS: Film[] = [
  {
    id: 1,
    title: 'Tre manifesti a Ebbing, Missouri ',
    description: 'La madre di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari, aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Martin McDonagh',
    duration: '115 min',
    releaseYear: 2017,
    stars: 5,
    cast: [
      {
        id: 1,
        firstname: 'Frances',
        lastname: 'McDormand'
      }
    ],
    genres: [
      {
        id: 44,
        name: 'drammatico',
      }
    ],
    tags: 'film top, mamme cazzute',
  },

  {
    id: 2,
    title: 'Fratello, dove sei? ',
    description: 'La Un misterioso uomo delle legge dà la caccia a tre detenuti evasi che viaggiano attraverso gli Stati Uniti alla ricerca della refurtiva di un vecchio colpo. di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari, aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Martin Ethan Coen, Joel Coen',
    duration: '106 min',
    releaseYear: 2000,
    stars: 5,
    cast: [
      {
        id: 6,
        firstname: 'George',
        lastname: 'Clooney'
      }
    ],
    genres: [
      {
        id: 88,
        name: 'commedia, avventura',
      }
    ],
    tags: 'hollywood, clooney',
  }
]

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  selectedFilm: Film;
  newFilm: Film;
  films: Film[];


  constructor(private localStorage: LocalStorageService) {}

  getFilms(): Observable<Film[]> {
    this.films = this.localStorage.retrieve('films') || FILMS;
    return of(this.films); //nella lista vuota, non nella const :D
  }

  addFilm(film: Film) {
    this.films.push(film);
    this.saveFilmInLocalStorage();
  }

  editFilm() {
    this.selectedFilm = null;
    this.saveFilmInLocalStorage();
  }

  saveFilmInLocalStorage() {
    this.localStorage.store('films', this.films);
  }




}
