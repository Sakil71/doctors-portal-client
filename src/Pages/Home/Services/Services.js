import React from 'react';
import img1 from '../../../assets/images/cavity.png';
import img2 from '../../../assets/images/fluoride.png';
import img3 from '../../../assets/images/whitening.png';
import treatement from '../../../assets/images/treatment.png';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
import doctor from '../../../assets/images/doctor.png';
import appoinmentBanner from '../../../assets/images/appointment.png';


const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Cavity Filling',
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img1,
        },
        {
            id: 2,
            name: 'Visit our location',
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img2,
        },
        {
            id: 3,
            name: 'Contact us now',
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolor deserunt nihil nisi eveniet rerum sequi, ratione facere aliquid ullam.',
            image: img3,
        },
    ]
    return (
        <section>
            <div className='my-20'>
                <div className='text-center mb-4'>
                    <h1 className='text-xl font-medium'>Our services</h1>
                    <p className='text-lg'>Services we provide</p>
                </div>
                <div className='flex flex-col md:flex-row  gap-4'>
                    {
                        services.map(service => <div key={service.id} className='border rounded p-4'>
                            <img className='w-14' src={service.image} alt="" />
                            <div>
                                <h1 className='text-xl font-medium'>{service.name}</h1>
                                <p>{service.details}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center'>
                <img className='md:w-1/4 rounded' src={treatement} alt="" />
                <div className='md:w-1/2'>
                    <h1 className='text-3xl font-medium'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>

            <div style={{background: `url(${appoinmentBanner})`}} className='md:flex justify-between items-center text-white my-32 rounded'>
                <img className='h-[500px] w-full hidden md:block -mt-36' src={doctor} alt="" />
                <div className='md:w-[90%] px-5 py-4'>
                    <h1 className='font-bold text-[#19D3AE]'>Appointment</h1>
                    <h1 className='text-3xl font-medium'>Make an appointment today</h1>
                    <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>

        </section>
    );
};

export default Services;