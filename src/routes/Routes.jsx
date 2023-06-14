import { createBrowserRouter } from "react-router-dom";
import Layout from "../loayout/Layout";
import Home from "../components/home/Home";
import Register from "../components/Loging&reg/Register";
import Login from "../components/Loging&reg/Login";
import AllToy from "../components/AllToys/AllToy";
import MyToys from "../components/myToys/myToys";
import AddToy from "../components/AddToy/AddToy";


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
            },
            {
                path: 'allToy',
                element: <AllToy></AllToy>
            },
            {
                path: 'myToys/:id',
                element: <MyToys></MyToys>,
                loader: ({params}) => fetch(`http://localhost:5000/robot/${params.id}`)
            },
            {
                path: 'addToy',
                element: <AddToy></AddToy>
            }
        ]
    }
])

export default routes