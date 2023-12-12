import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../utilities/Loading';

const Doctors = () => {
    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-eta-five.vercel.app/doctor');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDoctorDelete = doctor => {
        const agree = window.confirm(`Are you sure, want to delete doctor - ${doctor.name}`);
        if (agree) {
            fetch(`https://doctors-portal-server-eta-five.vercel.app/doctor/${doctor._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`Doctor - ${doctor.name} - deleted successfully`);
                    refetch();
                })
        }
    }
    return (
        <div>
            <h1 className='text-center font-bold my-4'>{doctors.length > 1 ? 'Doctors' : 'Doctor'} : {doctors.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th className='hidden md:block'>Contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.photo} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">{doctor.name}</div>
                                            <div className="text-sm font-bold opacity-80">{doctor.specialty}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='hidden md:block mt-4 font-medium'>
                                    {doctor.email}
                                </td>
                                <td className='text-rose-500 font-medium cursor-pointer hover:text-red-700'>
                                    <button onClick={() => handleDoctorDelete(doctor)}>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctors;