import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import useTitle from '../../../utilities/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../utilities/Loading';

const Appointment = () => {
    useTitle('Appointment');

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [services, setServices] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['treatment', date],
        queryFn: async()=>{
            const res = await fetch(`https://doctors-portal-server-eta-five.vercel.app/treatment?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-4 my-10">
                <div className=''>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <img className='' src={chair} alt="" />
                </div>
            </div>

            <p className='text-center text-[#19D3AE] font-bold my-5'>You selected: {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-20'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setServices={setServices}
                    ></AppointmentOptions>)
                }
            </div>

            {/* Modal */}
            {
                services &&
                <AppointmentModal
                key={services._id}
                    services={services}
                    setServices={setServices}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </div>
    );
};

export default Appointment;