import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre';
@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

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
