import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { Genre } from '../models/genre';
import { FilmService } from '../services/film.service';
import { ActorService } from '../services/actor.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {
  actors: Actor[];
  genres: Genre[];

  constructor(
    public filmService: FilmService,
    private actoService: ActorService,
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.actors = this.actoService.getActors();
    this.genres = this.genreService.getGenres();
  }
}
