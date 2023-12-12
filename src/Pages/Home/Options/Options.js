import React from 'react';
import img1 from '../../../assets/icons/clock.svg';
import img2 from '../../../assets/icons/marker.svg';
import img3 from '../../../assets/icons/phone.svg';

const Options = () => {
    const options = [
        {
            id: 1,
            name: 'Opening Hours',
            details: 'Open in 6.00 PM to 10.00 PM',
            image: img1,
            bgClass: ' bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Visit our location',
            details: 'Dhanmondi Dhaka',
            image: img2,
            bgClass: 'bg-slate-600'
        },
        {
            id: 3,
            name: 'Contact us now',
            details: '017XXXXXXXXX',
            image: img3,
            bgClass: ' bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]
    return (
        <div className=' flex flex-col md:flex-row gap-4'>
            {
                options.map(option=> <div key={option.id} className={`flex items-center w-full gap-4 rounded px-4 py-8 text-white ${option.bgClass}`}>
                    <div>
                        <img className='w-10' src={option.image} alt="" />
                    </div>
                    <div>
                    <h1 className='text-2xl font-medium'>{option.name}</h1>
                    <p>{option.details}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Options;