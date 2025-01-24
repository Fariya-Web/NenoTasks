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
import ErrorPage from "../Layouts/ErrorPage";
import Details from "../Components/DashboardPages/workerRoutes/Details";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/> ,
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
        errorElement: <ErrorPage/> ,
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
        errorElement: <ErrorPage/> ,
        children: [
            // admin routes
            {
                path: '/dashboard/adminhome',
                element: <PrivateRoute><AdminHome/></PrivateRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <PrivateRoute><AllUsers/></PrivateRoute>
            },
            {
                path: '/dashboard/alltasks',
                element: <AllTasks/>
            },


            // worker routes
            {
                path: '/dashboard/userhome',
                element: <PrivateRoute><WorkerHome/></PrivateRoute>
            },
            {
                path: '/dashboard/tasklist',
                element: <Tasklist/>
            },
            {
                path: '/dashboard/tasklist/:id',
                loader: ({params})=> fetch(`http://localhost:5000/task/${params.id}`),
                element: <Details/>
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