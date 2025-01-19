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
import BuyerHome from "../Components/DashboardPages/buyerRoutes/BuyerHome";
import AddTask from "../Components/DashboardPages/buyerRoutes/AddTask";
import MyTasks from "../Components/DashboardPages/buyerRoutes/MyTasks";
import Purchase from "../Components/DashboardPages/buyerRoutes/Purchase";
import Transaction from "../Components/DashboardPages/buyerRoutes/Transaction";


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

            // buyer routes
            {
                path: '/dashboard/buyerhome',
                element: <BuyerHome/>
            },
            {
                path: '/dashboard/addtask',
                element: <AddTask/>
            },
            {
                path: '/dashboard/mytasks',
                element: <MyTasks/>
            },
            {
                path: '/dashboard/purchase',
                element: <Purchase/>
            },
            {
                path: '/dashboard/transactions',
                element: <Transaction/>
            },
        ]
    },
    
]);

export default router