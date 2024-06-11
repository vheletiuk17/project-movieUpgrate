import {axiosService, IRes} from "./axiosService";
import {IMovies} from "../Interface/movieInterface";
import {urls} from "../Constants";
import {ISearch} from "../Interface/searchInterface";

const searchService = {
    getMoviesSearchForm: (params: { query: string, page: number }): IRes<IMovies> => axiosService.get(urls.movie.searchMovies(), { params: { query: params.query, page: params.page } }),
    getTrendsMovies: (query: string, page = '1'): IRes<ISearch> => axiosService.get(urls.movie.trends(), {params: {page, query}})

}

export {
    searchService
}