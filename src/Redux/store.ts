import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slice/movieSlice";
import {genreReducer} from "./slice/genresSlice";

const store = configureStore({
    reducer:{
        movie:movieReducer,
        genre:genreReducer

    }
})


export {
    store
}