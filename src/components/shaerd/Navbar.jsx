import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.email, 'user navbar')
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('logout succesfull');
            })
            .catch(error => console.log(error))
    }
    const navitems = <>
        <Toaster />
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? "text-orange-300" : ''}
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) => isActive ? "text-orange-300" : ''}
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/register'
                className={({ isActive }) => isActive ? "text-orange-300" : ''}
            >
                Register
            </NavLink>
        </li>
        {
            user ? <>
                <li>
                    <NavLink
                        to='/allToy'
                        className={({ isActive }) => isActive ? "text-orange-300" : ''}
                    >
                        All Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mytoys'
                        className={({ isActive }) => isActive ? "text-orange-300" : ''}
                    >
                        My Toys
                    </NavLink>
                </li>
                <li>
                    <button className='btn btn-warning text-white' onClick={handleLogout}>Log out</button>
                </li>

            </> : <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className=' lg:border-b-4  border-orange-300'>
            <div className="navbar max-w-7xl mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>

                    <div className='flex'>
                        <img className='w-10' src="https://images.squarespace-cdn.com/content/v1/5165f490e4b035d7482dde3c/1586201745863-PTV0OI8EUTWOFSKVS34Q/TRM_Logo_v7.png" alt="" />
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="avatar navbar-end">
                    <div className="w-12 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                        <img title={user?.displayName} src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;