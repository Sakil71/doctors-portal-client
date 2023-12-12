import React, { useContext } from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
import chair from '../../../assets/images/chair.png';
import backgroundBanner from '../../../assets/images/bg.png';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { user } = useContext(AuthContext);

    return (
        <section style={{ background: `url(${backgroundBanner})` }} className='p-4'>
            <div className='flex flex-col md:flex-row justify-between'>
                <p className='font-medium text-[#19D3AE]'>{format(new Date(), 'PPPPpppp').slice(0, -9)}</p>
                <p className='font-medium text-[#19D3AE]'>{user?.displayName}</p>
            </div>
            <div className='flex flex-col md:flex-row-reverse items-center gap-10 py-10 md:py-32'>
                <div>
                    <img src={chair} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>Your new smile starts here</h1>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis impedit, voluptates mollitia delectus commodi sapiente numquam amet exercitationem molestias.</p>

                    <Link to='/appointment'><ButtonPrimary>Get Started</ButtonPrimary></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;