import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-4">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side top-20">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 rounded text-base-content font-bold">
                        <li className='mb-2'><Link to='/dashboard/myappointments'>My Appointment</Link></li>
                        {
                            isAdmin && <>
                            <li className='mb-2'><Link to='/dashboard/users'>All Users</Link></li>
                            <li className='mb-2'><Link to='/dashboard/doctors'>All Doctors</Link></li>
                            <li className='mb-2'><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;