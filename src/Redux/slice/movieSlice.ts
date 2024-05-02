import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../Interface/movieInterface";
import {movieService} from "../../Services/movieService";
import {AxiosError} from "axios";

interface IState{
    movies: IMovie[]
    page: null | number

}

const initialState:IState ={
    movies: [],
    page: null,

}

const getAll = createAsyncThunk<IMovies,{page:number }>(
    'movieSlice/getAll',
    async ({page},{rejectWithValue}) =>{
        try {
            const {data} = await movieService.getAll(page)
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.page = action.payload.page

            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll,
    ...actions
}
export {

    movieReducer,
    movieActions
}