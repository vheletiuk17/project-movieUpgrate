import React, {FC} from 'react';
import {IGenre} from "../../Interface/genresInterface";
import {NavLink} from "react-router-dom";
import css from './genre.module.css'

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (

        <div className={css.container_btn}>
            <button className={css.btn}>
                <NavLink className={css.btn1} to={`${id}`}>{name}</NavLink>
            </button>
        </div>

    );
};

export {Genre};