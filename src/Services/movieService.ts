import {axiosService, IRes} from "./axiosService";
import {IMovies} from "../Interface/movieInterface";
import {urls} from "../Constants";


const movieService = {
    getAll:(page: number):IRes<IMovies> => axiosService.get(urls.movie.base, {params:{page}}),

}


export {
    movieService
}