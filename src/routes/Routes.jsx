import { createBrowserRouter } from "react-router-dom";
import Layout from "../loayout/Layout";
import Home from "../components/home/Home";
import Register from "../components/Loging&reg/Register";
import Login from "../components/Loging&reg/Login";
import AllToy from "../components/AllToys/AllToy";
// import MyToys from "../components/myToys/myToys";
import AddToy from "../components/AddToy/AddToy";
// import MyToys from "../components/myToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Blog from "../components/Blog/Blog";
import MyAllToy from "../components/MyAllToy/MyAllToy";
import UpadteToyData from "../components/UpdateDoc/UpadteToyData";
import MyToys from "../components/myToys/myToys";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'allToy',
                element: <AllToy></AllToy>
            },
            {
                path: 'toyDetails/:id',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: ({params}) => fetch(`https://11-assignment-server.vercel.app/robot/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyAllToy></MyAllToy></PrivateRoute>
            },
            {
                path: "robot/:id",
                element: <UpadteToyData></UpadteToyData>
            }
        ]
    }
])

export default routes