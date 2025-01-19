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
import WorkerHome from "../Components/DashboardPages/workerRoutes/WorkerHome";
import Tasklist from "../Components/DashboardPages/workerRoutes/Tasklist";
import Submission from "../Components/DashboardPages/workerRoutes/Submission";
import Withdrawals from "../Components/DashboardPages/workerRoutes/Withdrawals";


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


            // worker routes
            {
                path: '/dashboard/userhome',
                element: <WorkerHome/>
            },
            {
                path: '/dashboard/tasklist',
                element: <Tasklist/>
            },
            {
                path: '/dashboard/submissions',
                element: <Submission/>
            },
            {
                path: '/dashboard/withdrawals',
                element: <Withdrawals/>
            },
        ]
    },
    
]);

export default router