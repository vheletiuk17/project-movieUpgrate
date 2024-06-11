import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks/reduxHooks";
import {Movie} from "./Movie";
import {movieActions} from "../../Redux";
import css from './movies.module.css'


const Movies = () => {
    const {movies, page,total_pages} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()


    useEffect(() => {
        // @ts-ignore
        dispatch(movieActions.getAll({page}))
    }, [page, dispatch]);

    const PrevPage = () => {
        // @ts-ignore
        dispatch(movieActions.setPage(page-1))
    }
    const NextPage = () => {
        // @ts-ignore
        dispatch(movieActions.setPage(page+1))
    }
    return (
        <div className={css.main}>
            <p className={css.title}>We recommend watching the must popular</p>
            <div className={css.father}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <button className={css.prev} onClick={PrevPage} disabled={page === 1}>prev</button>
            Page:{page}
            <button className={css.next} onClick={NextPage} disabled={page > total_pages}>next</button>
        </div>
    );
};

export {Movies};