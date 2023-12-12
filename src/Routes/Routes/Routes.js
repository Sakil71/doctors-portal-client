import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Reviews from "../../Pages/Reviews/Reviews";
import Contact from "../../Pages/Contact/Contact";
import Register from "../../Pages/Shared/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../../Layout/Dashboard";
import MyAppointments from "../../Dashboard/MyAppointments/MyAppointments";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import Doctors from "../../Dashboard/Doctors/Doctors";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: 'reviews',
                element: <Reviews></Reviews>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/myappointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/doctors',
                element: <AdminRoutes><Doctors></Doctors></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
        ]
    }
])