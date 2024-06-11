import {RatingStars} from "../RattingStars/RattingStars";
import {IMovie} from "../../Interface/movieInterface";
import {FC} from "react";
import {urls} from "../../Constants";
import {NavLink} from "react-router-dom";
import css from './search.module.css'

interface IProps {
    trendsMovie: IMovie

}

const Search: FC<IProps> = ({trendsMovie}) => {
    const {id, poster_path, original_title, vote_average} = trendsMovie;

    const imgMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : ''
    return (
        <div className={css.trends_container}>
            <NavLink to={`/movie/${id}`}> <img className={css.poster} src={imgMovie} alt={original_title}/></NavLink>
            <div>{original_title}</div>
            <div className={css.stars}><RatingStars value={+vote_average}/></div>
        </div>
    );
};

export {Search};