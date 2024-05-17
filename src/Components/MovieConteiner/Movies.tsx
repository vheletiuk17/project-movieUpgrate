import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks/reduxHooks";
import {Movie} from "./Movie";
import {movieActions} from "../../Redux";
import css from './movies.module.css'


const Movies = () => {
    const {movies, page} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()


    useEffect(() => {

        dispatch(movieActions.getAll({page}))
    }, [page, dispatch]);

    return (
        <div className={css.main}>
            <p className={css.title}>We recommend watching the must popular</p>
            <div className={css.father}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};