import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";


import {MainLayouts} from "./Layouts/MainLayouts";
import {MoviesPage} from "./Pages/MoviesPage";

const router  = createBrowserRouter([
    {path:'', element:<MainLayouts/>, children:[
            {index: true, element: <Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviesPage/>},
        ]}
])


export {
    router
}