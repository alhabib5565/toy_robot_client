import { createBrowserRouter } from "react-router-dom";
import Layout from "../loayout/Layout";
import Home from "../components/home/Home";
import Register from "../components/Loging&reg/Register";
import Login from "../components/Loging&reg/Login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
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
            }
        ]
    }
])

export default routes