import {IMovie} from "./movieInterface";

export interface ISearch {
    title: string,
    page: number,
    results: IMovie[] | []
    prev: number | null,
    next: number | null,
}