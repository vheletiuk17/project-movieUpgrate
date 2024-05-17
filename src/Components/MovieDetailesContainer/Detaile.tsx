import React, {FC} from 'react';
import css from "./detaile.module.css";

import {RatingStars} from "../RattingStars/RattingStars";
import {urls} from "../../Constants";
import {IMovie} from "../../Interface/movieInterface";

interface IProps {
    detaile: IMovie
}

const Detaile:FC<IProps> = ({detaile}) => {

    const {poster_path, original_title, overview, vote_average} = detaile;

    const imgMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : ''

    return (
        <div className={css.content}>
            <img className={css.posterPath} src={imgMovie} alt={original_title}/>
            <div className={css.info}>
                <div className={css.title}>Title:{original_title}</div>
                <p>Overview:</p>
                <div className={css.overview}>{overview}</div>
                <div className={css.stars}><p>Ranting</p>: <RatingStars value={+vote_average}/></div>
            </div>
        </div>
    );
};

export {Detaile};