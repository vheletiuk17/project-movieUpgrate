import React from 'react';
import css from './home.module.css'
import {NavLink} from "react-router-dom";



const Home = () => {
    return (
        <div className={css.conteiner}>
            <div className={css.conteiner_text}>
                <p className={css.title}>Unlimited movies, TV shows, and more</p>
                <p>Ready to watch? Let's enjoying watching!</p>
            </div>
            <div className={css.conteiner_btn}>
                <button className={css.btn}>
                    <NavLink className={css.btn1} to={'/movie'}>Get watching!</NavLink>
                </button>
            </div>
        </div>
    );
};

export {Home};