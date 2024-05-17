import React from 'react';
import {Home} from "../../Components/HomeContainer/Home";
import css from './home.module.css'
const HomePage = () => {
    return (
        <div className={css.conteiner}>
            <Home/>
        </div>
    );
};

export {HomePage};