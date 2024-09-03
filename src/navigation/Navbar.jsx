import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>
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
                {/* <a className=" text-xl"><img src="" alt="" />living space</a>                    */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><button className='btn btn-success text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;