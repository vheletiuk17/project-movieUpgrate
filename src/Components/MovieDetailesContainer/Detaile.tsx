import React, {FC} from 'react';

import css from "./detaile.module.css";

import {RatingStars} from "../RattingStars/RattingStars";
import {urls} from "../../Constants";
import {IMovie} from "../../Interface/movieInterface";
import play from './icon/play.png'
import share from './icon/share.png'
import download from './icon/download.png'
import add from './icon/add.png'

interface IProps {
    detaile: IMovie
}

const Detaile: FC<IProps> = ({detaile}) => {

    const {poster_path, title, overview, vote_average, original_language, popularity, release_date} = detaile;

    const imgMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : ''

    return (
        <div className={css.father_container}>
            <div className={css.content_container}>
                <div className={css.poster_container}>
                    <img className={css.poster_path} src={imgMovie} alt={title}/>
                    <div className={css._watching_wishlist}>
                        <img className={css.icon} src={play} alt=""/>
                        <button className={css.btn_watching}>Watching</button>
                        <img className={css.icon} src={add} alt=""/>
                        <button className={css.btn_wishlist}>Add wishlist</button>
                    </div>
                    <div className={css.button_share_download}>
                        <img className={css.icon} src={download} alt=""/>
                        <button className={css.btn_download}>Download</button>
                        <img className={css.icon} src={share} alt=""/>
                        <button className={css.btn_share}>Share</button>
                    </div>
                </div>
                <div className={css.information_container}>
                    <div className={css.info}>
                        <p>Title:</p>
                        <div className={css.text}>{title}</div>
                        <p>Language</p>
                        <div className={css.text}>{original_language}</div>
                        <p>Popularity:</p>
                        <div className={css.text}>{popularity}</div>
                        <p>Release Data:</p>
                        <div className={css.text}>{release_date}</div>
                        <p>Overview:</p>
                        <div className={css.text}>{overview}</div>
                        <p>Ranting:</p>
                        <div className={css.rating}><RatingStars value={+vote_average}/></div>
                    </div>
                </div>
            </div>



            <div className={`${css.header} ${css.header1}`}>   </div>



        </div>
    );
};

export {Detaile};