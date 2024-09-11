import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react'
import profileicon from '../assets/user.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('loggedout successfully');

            })
    }
    return (
        <div className="navbar mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className='w-20'><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-x-4 items-center'>
                    <div className="rounded-full">
                        {user ? <div className='flex gap-x-4'>
                            <p>{user.displayName}</p>
                            <img className='rounded-full w-10'
                                alt="user"
                                src={user.photoURL}/>
                        </div>
                        : <img className='rounded-full w-10'
                        alt="user"
                        src={profileicon}/>}
                    </div>
                    <div>
                        {user ? <button onClick={handleLogout} className='btn btn-success text-white'>LogOut</button>
                            : <Link to='/login'><button className='btn btn-success text-white'>Login</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;