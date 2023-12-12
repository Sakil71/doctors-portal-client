import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useTitle from '../../../utilities/useTitle';
import useToken from '../../../Hooks/useToken';

const Register = () => {
    useTitle('Register');
    const [createdEmail, setCreatedEmail] = useState('');
    const [token] = useToken(createdEmail);

    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleInputData = data => {
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                saveUser(data.email, data.name);
                updateUser({
                    displayName: data.name,
                    photoURL: data.photo
                })
                    .then(result => {
                        toast.success("Registration successfull");
                        reset();
                    })
                    .catch(err => { })
            })
            .catch(error => {
                setSignUpError(error.message);
            })
    }

    const saveUser = (email, name) => {
        const user = { email, name };

        fetch('https://doctors-portal-server-eta-five.vercel.app/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedEmail(email);
            })
    }
    return (
        <div className='my-10 w-[96%] md:w-1/2 mx-auto p-4'>
            <form onSubmit={handleSubmit(handleInputData)} className='flex flex-col gap-4'>
                <h1 className='font-medium text-xl'>Create an user</h1>
                <input type='text' placeholder='Your Name' {...register("name")} className="input input-bordered input-success w-full" />

                <input type='url' placeholder='Photo Url' {...register("photo")} className="input input-bordered input-success w-full" />

                <input placeholder='Your email' type='email'
                    {...register("email",
                        {
                            required: 'Email address is required'
                        })}
                    className="input input-bordered input-success w-full" />
                {errors.email && <p className='text-red-700 font-medium'>{errors.email?.message}</p>}

                <input placeholder='Password' type='password'
                    {...register("password",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must have 6 character or longer' },
                            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, message: 'Password must have Uppercase, Lowercase and Special characters' }
                        })}
                    className="input input-bordered input-success w-full" />
                {errors.password && <p className='text-red-700 font-medium'><small>{errors.password?.message}</small></p>}

                {signUpError && <p className='text-red-700 font-medium'><small>{signUpError}</small></p>}

                <input className="btn text-white btn-bordered btn-success w-full" value={'Register'} type="submit" />
            </form>
            <p className='font-bold text-yellow-400'><small>Already have an account? <Link className='underline text-indigo-700' to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Register;