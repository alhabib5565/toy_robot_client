import { createBrowserRouter } from "react-router-dom";
import Layout from "../loayout/Layout";
import Home from "../components/home/Home";
import Register from "../components/Loging&reg/Register";
import Login from "../components/Loging&reg/Login";
import AllToy from "../components/AllToys/AllToy";
// import MyToys from "../components/myToys/myToys";
import AddToy from "../components/AddToy/AddToy";
import MyToys from "../components/myToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Blog from "../components/Blog/Blog";


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
                loader: ({params}) => fetch(`http://localhost:5000/robot/${params.id}`)
            },
            {
                path: 'addToy',
                element: <AddToy></AddToy>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default routes