import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './movie.module.css'
import {IMovie} from "../../Interface/movieInterface";
interface IProps {
    movie: IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average} = movie
    return (
        <div>
            <NavLink to={`/movie/${id}`}><img className={css.poster}
                                              src={"https://image.tmdb.org/t/p/w300" + poster_path}
                                              alt="img"/></NavLink>
            <div className={css.textBlock}>{original_title}</div>
        </div>
    );
};

export {Movie};