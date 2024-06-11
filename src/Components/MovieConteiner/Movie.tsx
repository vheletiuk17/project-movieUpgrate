import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './movie.module.css'
import {IMovie} from "../../Interface/movieInterface";
import {RatingStars} from "../RattingStars/RattingStars";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average} = movie
    return (

            <div className={css.card}>
                <NavLink to={`/movie/${id}`}><img className={css.poster} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="img"/></NavLink>
                {original_title}
                <div className={css.stars}><RatingStars value={+vote_average}/></div>

            </div>

    );
};

export {Movie};