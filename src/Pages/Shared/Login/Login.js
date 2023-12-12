import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../../utilities/useTitle';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    useTitle('Login');

    const { signInUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [loginError, setloginError] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleInputData = data => {
        setloginError('');

        signInUser(data.email, data.password)
            .then(result => {
                toast.success("Login successfull");
                setLoginEmail(data.email);
            })
            .catch(error => {
                setloginError(error.message);
            })
    }
    return (
        <div className='my-10 w-[96%] md:w-1/2 mx-auto p-4'>
            <form onSubmit={handleSubmit(handleInputData)} className='flex flex-col gap-4'>
                <h1 className='font-medium text-xl'>Login Now</h1>

                <input placeholder='Your email' type='email'
                    {...register("email",
                        {
                            required: 'Email address is required'
                        })}
                    className="input input-bordered input-success w-full" />
                {errors.email && <p className='text-red-700 font-medium'>{errors.email?.message}</p>}

                <input placeholder='Password' type='password'
                    {...register("password",
                        { required: "Password is required" })}
                    className="input input-bordered input-success w-full" />
                {errors.password && <p className='text-red-700 font-medium'><small>{errors.password?.message}</small></p>}

                {loginError && <p className='text-red-700 font-medium'><small>{loginError}</small></p>}

                <input className="btn text-white btn-bordered btn-success w-full" value={'Login'} type="submit" />
            </form>
            <p className='font-bold text-yellow-400'><small>New in here? <Link className='underline text-indigo-700' to='/register'>Register</Link></small></p>
        </div>
    );
};

export default Login;