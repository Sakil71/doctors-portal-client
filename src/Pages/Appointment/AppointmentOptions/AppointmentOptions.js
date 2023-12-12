import React from 'react';

const AppointmentOptions = ({ option, setServices }) => {
    const { name, slots } = option;
    return (
        <div className="card w-[96%] md:w-96 mx-auto bg-base-100 shadow-xl border text-center">
            <div className="card-body">
                <h2 className="text-xl font-bold text-[#3da993]">{name}</h2>
                <p className='font-medium'>{slots[0]}</p>
                <p className='font-medium'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className={`text-center ${slots.length === 0 ? 'pointer-events-none opacity-60' : ''}`}>
                    <label onClick={()=> setServices(option)} htmlFor="appointmetnt-modal" className="text-xs px-4 py-2 border rounded mt-5 text-white bg-[#3da993] hover:bg-[#3c8a7b] w-1/2 cursor-pointer">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;