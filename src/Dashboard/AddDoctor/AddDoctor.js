import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const { data: specialities = [] } = useQuery({
        queryKey: ['doctorSpecialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-eta-five.vercel.app/doctorSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBb}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        photo: imgData.data.url
                    }
                    fetch('https://doctors-portal-server-eta-five.vercel.app/doctor', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            if (doctorData.acknowledged) {
                                reset();
                                toast.success('Doctor successfully added');
                                navigate('/dashboard/doctors');
                            }
                        })
                }
            })
    }
    return (
        <div className='my-10 w-[96%] md:w-1/2 mx-auto p-4'>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='flex flex-col gap-4'>
                <h1 className='font-medium text-xl'>Add A Doctor</h1>

                <input placeholder='Doctor name' type='name'
                    {...register("name",
                        {
                            required: 'Name is required'
                        })}
                    className="input input-bordered input-success w-full" />
                {errors.name && <p className='text-red-700 font-medium'>{errors.name?.message}</p>}

                <input placeholder='Doctor email' type='email'
                    {...register("email",
                        {
                            required: 'Email is required'
                        })}
                    className="input input-bordered input-success w-full" />
                {errors.email && <p className='text-red-700 font-medium'>{errors.email?.message}</p>}

                <select className="select select-success w-full"  {...register("specialty",
                    {
                        required: 'specialty is required'
                    })}>

                    {
                        specialities.map(specialty => <option key={specialty._id} className='font-bold'>
                            {specialty.name}
                        </option>)
                    }
                </select>
                {errors.specialty && <p className='text-red-700 font-medium'>{errors.specialty?.message}</p>}

                <input type="file" {...register("photo")} className="file-input file-input-bordered file-input-success w-full" />

                <input className="btn text-white btn-bordered btn-success w-full mt-5" value={'Add Doctor'} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;