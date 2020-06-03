import { Film } from './Film';

export interface User {
    id?: number;
    firstname: string;
    lastname:string;
    favoritesFilm: Film[];
    username: string;
    password: string;
    token: string;
}