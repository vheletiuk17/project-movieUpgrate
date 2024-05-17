import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../Interface/genresInterface";
import {IMovie, IMovies} from "../../Interface/movieInterface";
import {genresService} from "../../Services/genresService";
import {AxiosError} from "axios";

interface IState {
    genres:IGenre[]
    page: number
    movies:IMovie[]
}


const  initialState:IState = {
    genres:[],
    movies:[],
    page:null
}
const getAll=createAsyncThunk<IGenres,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genresService.getAll()
            return data
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const getById=createAsyncThunk<IMovies,{id:number,page:number}>(
    'genreSlice/getById',
    async ({id,page},{rejectWithValue})=>{
        try {
            const {data}=await genresService.getById(id,page)
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }

)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder.addCase(getAll.fulfilled,(state, action)=>{
            state.genres=action.payload.genres
        })
            .addCase(getById.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.page=action.payload.page
            })

})

const {reducer:genreReducer,actions}=genresSlice

const genreActions = {
        ...actions,
    getAll,
    getById

}


export {
    genreReducer,
    genreActions
}