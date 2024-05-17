import {axiosService, IRes} from "./axiosService";
import {IMovie, IMovies} from "../Interface/movieInterface";
import {urls} from "../Constants";


const movieService = {
    getAll:(page: number):IRes<IMovies> => axiosService.get(urls.movie.base, {params:{page}}),
    getById:(id:number):IRes<IMovie> => axiosService.get(urls.movie.byId(id))

}


export {
    movieService
}