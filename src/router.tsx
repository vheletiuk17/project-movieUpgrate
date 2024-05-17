import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";


import {MainLayouts} from "./Layouts/MainLayouts";
import {MoviesPage} from "./Pages/MoviesPage";
import {RegPage} from "./Pages/RegPage";
import {GenrePage} from "./Pages/GenrePage";
import {HomePage} from "./Pages/c/HomePage";
import {DetailesPage} from "./Pages/DetailesPage";

const router  = createBrowserRouter([
    {path:'', element:<MainLayouts/>, children:[
            {index: true, element: <Navigate to={'home'}/>},
            {path:'home',element:<HomePage/>},
            {path: 'movie', element: <MoviesPage/>},
            {path:'login', element:<RegPage/>},
            {path:'genre', element:<GenrePage/>},
            {path:`movie/:id`, element:<DetailesPage/>}
        ]}
])


export {
    router
}