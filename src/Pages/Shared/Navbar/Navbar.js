import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        const agree = window.confirm("Are you sure? You want to logout?")
        if (agree) {
            logOutUser()
                .then(() => { })
                .catch(err => { })
        }
    }

    const navList = <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/appointment'>Appointment</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/contact'>Contact Us</Link>
        {
            user && <Link to='/dashboard'>Dashboard</Link>
        }
        {
            user?.uid && <button onClick={handleLogout} className='text-red-500'>Logout</button>
        }
        <label htmlFor="dashboard-drawer" className="drawer-button">
            {
                user?.uid ?
                    <div className="avatar hidden md:block">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt='' />
                                    :
                                    <FaUser className='text-xl'></FaUser>
                            }
                        </div>
                    </div>
                    :
                    <Link to='login'>Login</Link>
            }
        </label>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar flex justify-between">
                <div onClick={() => setOpen(!open)} className='text-2xl md:hidden cursor-pointer z-30'>
                    {
                        open ?
                            <IoIosCloseCircle></IoIosCloseCircle>
                            :
                            <MdMenu></MdMenu>

                    }
                </div>

                <Link to='/' className="btn btn-ghost text-xl">Doctors Portal</Link>

                <div className="avatar md:hidden">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt='' />
                                    :
                                    <FaUser className='text-xl'></FaUser>
                            }
                        </label>
                    </div>
                </div>

                <ul onClick={() => setOpen(false)} className={`${open ? 'top-0' : 'top-[-350px]'} absolute left-0 duration-700 w-full text-white menu menu-sm font-bold p-2 shadow md:hidden bg-indigo-800 z-20`}>
                    <h1 className='text-xl my-4 p-2'>Doctors Portal</h1>
                    <li>{navList}</li>

                </ul>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='flex flex-row items-center gap-4 font-bold'>{navList}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;