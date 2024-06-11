import React from 'react';
import {Outlet} from "react-router";
import {Searchs} from "../Components/SearchContainer/Searchs";

const SearchPage = () => {
    return (
        <div>
            <Outlet/>
            <Searchs/>
        </div>
    );
};

export {SearchPage};