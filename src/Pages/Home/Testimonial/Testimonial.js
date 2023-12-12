import React from 'react';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    const patients = [
        {
            id: 1,
            name: 'Winson Herry',
            location: 'USA',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img1,
        },
        {
            id: 2,
            name: 'Nishat',
            location: 'Dhaka, Bangladesh',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img2,
        },
        {
            id: 3,
            name: 'Alex',
            location: 'UK',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img3,
        },
    ]

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-[#19D3AE]'>Testimonial</h1>
                    <p className='text-3xl'>What our student says</p>
                </div>
                <img className='w-20 md:w-32' src={quote} alt="" />
            </div>
            <div className='flex flex-col md:flex-row gap-4 mt-5'>
                {
                    patients.map(patient => <div key={patient.id} className='shadow-xl p-4 rounded border'>
                        <p><small>{patient.comment}</small></p>
                        <div className='flex items-center gap-3 mt-4'>
                            <img className='w-14 ring-2 ring-[#19D3AE] rounded-full' src={patient.image} alt="" />
                            <div>
                                <h1 className='font-bold'>{patient.name}</h1>
                                <h1 className='opacity-80'>{patient.location}</h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;