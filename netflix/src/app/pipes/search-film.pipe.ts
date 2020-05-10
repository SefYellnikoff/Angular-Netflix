import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/Film';

@Pipe({
  name: 'searchFilm'
})
export class SearchFilmPipe implements PipeTransform {

  transform(films: Film[], ...args: string[]): Film[] {
    let textSearch = args[0];
    if (textSearch.length > 2) {
      return films.filter(x => x.title.toLowerCase().indexOf(textSearch.toLowerCase()) > -1);
    }
    return films;
  }

}
