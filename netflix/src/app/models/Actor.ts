import { Film } from './Film';

export interface Actor {
    id?: number;
    firstname: string;
    lastname: string;
    selected?: boolean;
    films?: Film[];
}