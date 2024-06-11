import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";


import {MainLayouts} from "./Layouts/MainLayouts";
import {MoviesPage} from "./Pages/MoviesPage";
import {GenrePage} from "./Pages/GenrePage";
import {HomePage} from "./Pages/HomePage";
import {DetailesPage} from "./Pages/DetailesPage";
import {LoginPage} from "./Pages/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage";
import {SearchPage} from "./Pages/SearchPage";


const router  = createBrowserRouter([
    {path:'', element:<MainLayouts/>, children:[
            {index: true, element: <Navigate to={'home'}/>},
            {path:'home',element:<HomePage/>},
            {path: 'movie', element: <MoviesPage/>},
            {path:'login', element:<LoginPage/>},
            {path:'genre', element:<GenrePage/>},
            {path:`movie/:id`, element:<DetailesPage/>},
            {path:'register', element:<RegisterPage/>},
            {path:'search', element:<SearchPage/>}
        ]}
])


export {
    router
}