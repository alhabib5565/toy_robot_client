import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navitems = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? "text-blue-500" : '' }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/alltoys'
                className={({ isActive }) => isActive ? "text-blue-500" : '' }
            >
                All Toys
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/mytoys'
                className={({ isActive }) => isActive ? "text-blue-500" : '' }
            >
                My Toys
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) => isActive ? "text-blue-500" : '' }
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/register'
                className={({ isActive }) => isActive ? "text-blue-500" : '' }
            >
                Register
            </NavLink>
        </li>
    </>
    return (
        <div className=''>
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
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {navitems}
                    </ul>
                </div>
                <div className="avatar navbar-end">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;