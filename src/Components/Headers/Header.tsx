import React from 'react';
import css from './header.module.css'


const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo_1}>MovieLand</div>
            <div className={css.control_menu}>
                <div className={css.movie}>Movie</div>
                <div className={css.genres}>Genres</div>
                <div className={css.search}>Search</div>
            </div>
            <div className={'login-reg'}>Login</div>
        </div>
    );
};

export {Header};