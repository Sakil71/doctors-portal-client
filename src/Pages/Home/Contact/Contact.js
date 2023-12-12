import React from 'react';
import contactBackground from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className='my-20 text-center text-white py-5 rounded' style={{background: `url(${contactBackground})`}}>
            <h1 className='font-bold text-[#19D3AE]'>Contact us</h1>
            <h1 className='text-3xl mb-4'>Stay connected with us</h1>
            <div className='flex flex-col justify-center items-center text-black font-medium'>
                <input className='outline-none px-4 py-2 border rounded-md w-[90%] md:w-2/4' placeholder='Your email' type="email" name="email" id="" />
                <input className='outline-none px-4 py-2 border rounded-md w-[90%] md:w-2/4 my-4' placeholder='Subject' type="text" name="subject" id="" />
                <textarea className='w-[90%] md:w-1/2 rounded px-4 py-2 outline-none' name="message" placeholder='Message' id=""  rows="4"></textarea>
                <button className='text-white bg-[#19D3AE] hover:bg-[#52a895] mt-5 px-4 py-2 rounded w-[90%] md:w-2/4' type="submit">Submit</button>
            </div>
        </div>
    );
};

export default Contact;