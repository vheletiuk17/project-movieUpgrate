import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks/reduxHooks";
import {Movie} from "./Movie";
import {movieActions} from "../../Redux";

const Movies = () => {
   const {movies,page } = useAppSelector(state => state.movie)
   const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(movieActions.getAll({page}))
    }, [page,dispatch]);

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};