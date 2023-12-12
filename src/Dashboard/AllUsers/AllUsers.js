import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../utilities/Loading';
import useTitle from '../../utilities/useTitle';
import toast from 'react-hot-toast';
import { TiTick } from "react-icons/ti";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
    useTitle('users');

    const { user: authUser } = useContext(AuthContext);

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-eta-five.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = user => {
        const agree = window.confirm(`Are you wnat to make admin? - ${user.name}`);
        if (agree) {
            fetch(`https://doctors-portal-server-eta-five.vercel.app/users/admin/${user._id}`, {
                method: "PUT",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${user.name} - is now admin`);
                        refetch();
                    }
                })
        }
    }

    const handleDelete = user => {
        const agree = window.confirm('Are you wnat to delete?');
        if (agree) {
            fetch(`https://doctors-portal-server-eta-five.vercel.app/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.error(`${user.name} - successfully deleted`);
                        refetch();
                    }
                })
        }
    }
    return (
        <div className='px-0 mx-0'>
            <h1 className='text-xl font-medium text-center mb-5'>Users : {allUsers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th className='hidden md:block'>Email</th>
                            <th className='hidden md:block'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <p className='font-bold flex items-center gap-1'>
                                        {user.name}

                                        {
                                            authUser?.email === user.email &&
                                            <span className='w-4 h-4 text-xs bg-blue-600 border rounded-full shadow-lg flex items-center justify-center' title='This is you'>
                                                <TiTick></TiTick>
                                            </span>

                                        }
                                    </p>
                                    <small className='md:hidden'>{user.email}</small>
                                    <small className='text-xs text-indigo-700 block'>{user?.role}</small>

                                    <p className=''>
                                        {
                                            user?.role !== 'admin' &&
                                            <span><button onClick={() => makeAdmin(user)} className='text-xs px-2 bg-green-800 text-white rounded hover:bg-green-600'>Make Admin</button></span>
                                        }
                                    </p>

                                </td>
                                <td className='hidden md:block'>{user.email}</td>

                                <td><button onClick={() => handleDelete(user)} className='text-xs px-4 py-1 bg-red-800 text-white rounded hover:bg-red-600'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;