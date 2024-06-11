import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../Interface/movieInterface";
import {movieService} from "../../Services/movieService";
import {AxiosError} from "axios";

interface IState{
    movies: IMovie[] ,
    page:  number | null,
    detailes:IMovie | null,
    total_pages:number | null
}

const initialState:IState ={
    movies: [],
    page: null,
    detailes:null,
    total_pages:null
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
                state.detailes =action.payload
            })
            .addCase(setPage, (state, action) =>{
                state.page= action.payload
            })
})
const setPage =createAction<number>('movie/Slice/setPage')



const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setPage,
    ...actions
}
export {

    movieReducer,
    movieActions
}