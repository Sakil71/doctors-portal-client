import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <button className='px-5 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-white  hover:text-slate-300'>{children}</button>
    );
};

export default ButtonPrimary;