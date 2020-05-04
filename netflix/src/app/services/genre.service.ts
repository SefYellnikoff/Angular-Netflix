import { Injectable } from '@angular/core';
import { Genre } from '../models/Genre';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

const GENRES: Genre[] = [
  {
    id: 11,
    name: 'drammatico'
  },
  {
    id: 10,
    name: 'avventura'
  },
  {
    id: 9,
    name: 'comico'
  },
  {
    id: 88,
    name: 'thriller'
  },
  {
    id: 4,
    name: 'noir'
  },
  {
    id: 5,
    name: 'horror'
  },
  {
    id: 66,
    name: 'fantasy'
  },
  {
    id: 7,
    name: 'romantico'
  },
  {
    id: 3,
    name: 'documentario'
  },
  {
    id: 14,
    name: 'splatter'
  },
]

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  selectedGenre: Genre;
  newGenre: Genre;
  genres: Genre[];


  constructor(private localStorage: LocalStorageService) { }

  getGenres(): Observable<Genre[]> {
    this.genres = this.localStorage.retrieve('genres') || GENRES;
    return of(this.genres);
  }

  addGenre(genre: Genre) {
    this.genres.push(genre);
    this.saveGenreInLocalStorage();
  }

  editGenre() {
    this.selectedGenre = null;
    this.saveGenreInLocalStorage();
  }

  saveGenreInLocalStorage() {
    this.localStorage.store('genres', this.genres);
  }
}
