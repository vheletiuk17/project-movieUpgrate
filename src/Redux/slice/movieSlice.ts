import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../Interface/movieInterface";
import {movieService} from "../../Services/movieService";
import {AxiosError} from "axios";

interface IState{
    movies: IMovie[]
    page:  number
    detailes:IMovie[],
    id: number
}

const initialState:IState ={
    movies: [],
    page: null,
    detailes:[],
    id: null
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

const getById =  createAsyncThunk<IMovie, {id:number}>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getById(id)
            return data
        }catch (e){
            const err = e as AxiosError
            return  rejectWithValue(err.response?.data)
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
            .addCase(getById.fulfilled, (state, action) =>{
                state.id =action.payload
                state.detailes =action.payload
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll,
    getById,
    ...actions
}
export {

    movieReducer,
    movieActions
}