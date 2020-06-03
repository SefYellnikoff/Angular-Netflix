import { Injectable } from '@angular/core';
import { Film } from '../models/Film';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

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
        lastname: 'McDormand',
        
      }
    ],
    genres: [
      {
        id: 44,
        name: 'drammatico',
      }
    ],
    tags: 'film top, mamme cazzute',
    coverUrl: 'https://pad.mymovies.it/filmclub/2017/03/125/locandina.jpg'
  },

  {
    id: 2,
    title: 'Fratello, dove sei? ',
    description: 'La Un misterioso uomo delle legge dà la caccia a tre detenuti evasi che viaggiano attraverso gli Stati Uniti alla ricerca della refurtiva di un vecchio colpo. di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari, aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Martin Ethan Coen, Joel Coen',
    duration: '106 min',
    releaseYear: 2000,
    stars: 3,
    cast: [
      {
        id: 6,
        firstname: 'George',
        lastname: 'Clooney',
       
      }
    ],
    genres: [
      {
        id: 88,
        name: 'commedia, avventura',
      }
    ],
    tags: 'hollywood, clooney',
    coverUrl: 'https://www.filmalcinema.com/wp-content/uploads/2017/03/poster-88-360x618.jpg'
  },
  {
    id: 3,
    title: 'No Country for Old Men ',
    description: 'Durante una battuta di caccia in solitaria, un saldatore del Texas trova e si impossessa di una somma di denaro precedentemente rubata. Luomo diventa così preda di una banda di criminali. Un misterioso uomo delle legge dà la caccia a tre detenuti evasi che viaggiano attraverso gli Stati Uniti alla ricerca della refurtiva di un vecchio colpo. di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari, aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Ethan Coen, Joel Coen',
    duration: '106 min',
    releaseYear: 2008,
    stars: 4,
    cast: [
      {
        id: 6,
        firstname: 'Llewellyn Moss',
        lastname: 'Moss',
        
      }
    ],
    genres: [
      {
        id: 88,
        name: 'drama,  thriller',
      }
    ],
    tags: 'hollywood, Moss',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Sk%2B5YKgXL._SY445_.jpg'
  },
  {
    id: 4,
    title: 'I soliti sospetti ',
    description: 'Durante una L agente speciale Dave Kujan investiga sulla causa dell incendio di una barca nel porto di San Pedro, Los Angeles, che ha provocato la morte di 27 persone. La sua unica fonte di informazioni è Roger Kint, un criminale sopravvissuto allincidente. di caccia in solitaria, un saldatore del Texas trova e si impossessa di una somma di denaro precedentemente rubata. Luomo diventa così preda di una banda di criminali. Un misterioso uomo delle legge dà la caccia a tre detenuti evasi che viaggiano attraverso gli Stati Uniti alla ricerca della refurtiva di un vecchio colpo. di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Bryan Singer',
    duration: '107 min',
    releaseYear: 1995,
    stars: 2,
    cast: [
      {
        id: 6,
        firstname: 'Kevin',
        lastname: 'Spacey',
        
      }
    ],
    genres: [
      {
        id: 88,
        name: 'drama,  thriller',
      }
    ],
    tags: 'hollywood, Spacey',
    coverUrl: 'https://cdn.gelestatic.it/kataweb/tvzap/2018/02/taglioAlta_001101.jpg'
  },
  {
    id: 4,
    title: 'Seven ',
    description: 'Durante una L agente speciale Dave Kujan investiga sulla causa dell incendio di una barca nel porto di San Pedro, Los Angeles, che ha provocato la morte di 27 persone. La sua unica fonte di informazioni è Roger Kint, un criminale sopravvissuto allincidente. di caccia in solitaria, un saldatore del Texas trova e si impossessa di una somma di denaro precedentemente rubata. Luomo diventa così preda di una banda di criminali. Un misterioso uomo delle legge dà la caccia a tre detenuti evasi che viaggiano attraverso gli Stati Uniti alla ricerca della refurtiva di un vecchio colpo. di una ragazza assassinata scrive un controverso messaggio su alcuni cartelloni pubblicitari aprendo una contesa che vede coinvolti lo stimato capo della polizia e un pericoloso poliziotto.',
    director: 'Bryan David Fincher',
    duration: '107 min',
    releaseYear: 1995,
    stars: 1,
    cast: [
      {
        id: 6,
        firstname: 'Kevin',
        lastname: 'Spacey',
        
      }
    ],
    genres: [
      {
        id: 88,
        name: 'drama,  thriller',
      }
    ],
    tags: 'hollywood, Spacey',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zxb01VVWL._SY445_.jpg'
  }
]

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[];
  selectedFilm: Film;
  newFilm: Film = {
    title: '',
    description: '',
    director: '',
    duration: '',
    releaseYear: 0,
    stars: 0,
    cast: [],
    genres: [],
    tags: '',
    coverUrl: ''
  };
  constructor(private localStorage: LocalStorageService, private http: HttpClient, private userService: UserService) { }

  getFilms(): Observable<Film[]> {
    //this.films = this.localStorage.retrieve('films') || FILMS;
    //return this.films;
    return this.http.get<Film[]>('http://netflix.cristiancarrino.com/film/read.php').pipe(
      tap(response => console.log(response))
    );//
  }



  addFilm(): void {
    let loggedUser = this.userService.getLoggedUser();

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': loggedUser.token
      })
    };

    this.http.post<Film>('http://netflix.cristiancarrino.com/film/create.php', this.newFilm, httpOptions).subscribe(response => {
      console.log(response);
      this.getFilms().subscribe(response => this.films = response)
    });


    this.newFilm = {
      title: "",
      description: "",
      director: "",
      duration: "",
      releaseYear: 0,
      stars: 0,
      cast: [],
      genres: [],
      tags: '',
      coverUrl: ''
    }
  }



  editFilm(): void {
    this.localStorage.store('films', this.films);
    this.selectedFilm = null;
  }

  getLastFilms(films: Film[]): Film[] {
    return films.slice(-4);
  }

  getBestFilms(films: Film[]): Film[] {
    return films.sort((film1, film2) => {
      if (film1.stars > film2.stars) {
        return -1;
      }

      return 0;
    }).slice(0, 3);
  }

  removeFilm(id: number) {
    let loggedUser = this.userService.getLoggedUser();

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': loggedUser.token
      })
    };
    console.log({ id: id });

    this.http.post<Film>('http://netflix.cristiancarrino.com/film/delete.php', this.newFilm, httpOptions).subscribe(response => {
      console.log(response);
      this.getFilms().subscribe(response => this.films = response)
    });

  }
}
