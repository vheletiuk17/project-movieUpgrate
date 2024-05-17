import React, {useEffect} from 'react';

import css from './genres.module.css'
import {useAppDispatch, useAppSelector} from "../../../Hooks/reduxHooks";
import {genreActions} from "../../../Redux/slice/genresSlice";
import {Genre} from "../Genre";

const Genres = () => {

    const {genres} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);
    return (
        <div>
            <p>All genres</p>
            <div className={css.conteiner_father}>
                <div className={css.conteiner}>
                    {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            </div>
        </div>
    );
};

export {Genres};