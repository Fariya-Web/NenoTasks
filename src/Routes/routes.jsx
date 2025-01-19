import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";
import Auth from "../Layouts/Auth";
import Login from "../Components/Auth/Login";
import Register from './../Components/Auth/Register';
import Dashboard from "../Layouts/Dashboard";
import AdminHome from "../Components/DashboardPages/adminRoutes/AdminHome";
import AllUsers from "../Components/DashboardPages/adminRoutes/AllUsers";
import AllTasks from "../Components/DashboardPages/adminRoutes/AllTasks";


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
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            // admin routes
            {
                path: '/dashboard/adminhome',
                element: <AdminHome/>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers/>
            },
            {
                path: '/dashboard/alltasks',
                element: <AllTasks/>
            },
        ]
    },
    
]);

export default router