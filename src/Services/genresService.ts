import {axiosService, IRes} from "./axiosService";
import {urls} from "../Constants";
import {IGenres} from "../Interface/genresInterface";
import {IMovies} from "../Interface/movieInterface";

const genresService = {
    getAll:():IRes<IGenres> => axiosService.get(urls.genre.base),
    getById:(genreId:number, page:number):IRes<IMovies> => axiosService.get(urls.genre.byId(genreId), {params:{page}})
}

export {
    genresService
}