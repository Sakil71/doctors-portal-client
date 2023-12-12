import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const AppointmentModal = ({ services, selectedDate, setServices, refetch }) => {
    const { user } = useContext(AuthContext);

    const { name: treatmentName, slots } = services;
    const date = format(selectedDate, 'PP');

    const handleModalData = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            date,
            treatmentName,
            slot,
            userName: name,
            email,
            phone
        }

        fetch(`https://doctors-portal-server-eta-five.vercel.app/bookings`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${treatmentName} - booking successfull`);
                    setServices(null);
                    refetch();
                }
                else{
                    setServices(null);
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="appointmetnt-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-[#47897c]">{treatmentName}</h3>

                    <form onSubmit={handleModalData} className='my-4 flex flex-col gap-4'>
                        <input type="text" value={date} readOnly className="input font-bold input-bordered input-success w-full" />

                        <select name='slot' className="select select-success w-full font-medium">
                            {
                                slots.map(slot => <option value={slot} className='font-medium'>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered input-success w-full font-medium" />
                        <input name='email' type="email" defaultValue={user.email} readOnly className="input input-bordered input-success w-full font-medium" />
                        <input name='phone' type="text" placeholder='Your phone number' className="input input-bordered input-success w-full font-medium" />
                        <button className='py-2 rounded-lg bg-[#3da993] text-white hover:bg-[#47897c] border w-full' type="submit">Submit</button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="appointmetnt-modal">Close</label>
            </div>
        </>
    );
};

export default AppointmentModal;