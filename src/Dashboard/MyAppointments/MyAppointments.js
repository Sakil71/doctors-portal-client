import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../utilities/Loading';
import useTitle from '../../utilities/useTitle';

const MyAppointments = () => {
    useTitle('my-appointments')
    const { user } = useContext(AuthContext);
    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-eta-five.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch();

    return (
        <div>
            <h1 className='text-xl font-medium text-center mb-5'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment Name</th>
                            <th>Date <span className='md:hidden'>& Time</span></th>
                            <th className='hidden md:block'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments &&
                            appointments.map((appointment, i) => <tr>
                                <th>{i + 1}</th>
                                <td className='font-bold'>{appointment.treatmentName}</td>
                                <td>
                                    {appointment.date}
                                    <span className='md:hidden block font-medium'>{appointment.slot}</span>
                                </td>
                                <td className='hidden md:block font-medium'>{appointment.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;