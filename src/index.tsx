import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router";
import {router} from "./router";
import {Provider} from "react-redux";
import {store} from "./Redux";
import './style.index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
<RouterProvider router={router}/>
    </Provider>
);

