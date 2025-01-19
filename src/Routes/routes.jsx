import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";
import Auth from "../Layouts/Auth";
import Login from "../Components/Auth/Login";
import Register from './../Components/Auth/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: '/auth',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
        ]
    },
    
]);

export default router