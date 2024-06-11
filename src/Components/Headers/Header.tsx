import React from 'react';
import css from './header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <div className={css.container}>
            <div className={css.logo_1}>MovieLand</div>
            <div className={css.control_menu}>
                <NavLink to={"home"} className={css.home}>Home</NavLink>|
                <NavLink to={"movie"} className={css.movie}>Movie</NavLink>|
                <NavLink to={'genre'} className={css.genres}>Genres</NavLink>|
                <NavLink to={'search'} className={css.search}>Search</NavLink>|
            </div>
            <div className={css.conteiner_authorization}>
                <NavLink to={'login'} className={css.login}>Login </NavLink>
                /
                <NavLink to={'register'} className={css.register}> Sing Up</NavLink>
            </div>

        </div>
    );
};

export {Header};
