import React from 'react';
import {Header} from "../Components/Headers";
import {Outlet} from "react-router";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};