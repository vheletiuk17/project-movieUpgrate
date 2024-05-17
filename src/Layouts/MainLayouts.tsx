import React from 'react';
import {Header} from "../Components/Headers";
import {Outlet} from "react-router";
import css from './m.module.css'
const MainLayouts = () => {
    return (
        <div className={css.conteiner}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};