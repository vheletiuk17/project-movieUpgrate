const baseURL = "https://api.themoviedb.org/3/";

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJjMjcwMzQ5YzMzYTFkYzNmNjI5MWY4YzBlNDI0MiIsInN1YiI6IjY1NGE4ZDNjNmJlYWVhMDEyYzkwNDFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFAapPvqyWaXZEMGaVgh3XF5GyAR_ftLR-iB6n0jU8E'

const movie = '/discover/movie';
const genres = '/genre/movie/list'
const urlImg = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movie:{
        base:movie,
        imgUrl: urlImg
    },
    genre:{
        base:genres,
    }

}


export {
    baseURL,
    urls,
    API_KEY
}