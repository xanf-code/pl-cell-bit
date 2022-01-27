import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getSingleCompany } from '../../../../network/lib/companies';

function Mail() {

    const router = useRouter();
    const [registers, setRegisters] = useState([]);

    const { cid, cname } = router.query;

    useEffect(() => {
        getSingleCompany(cid && cid)
            .then(data => {
                setRegisters(data.data.registration.map(register => register.email));
            })
    }, [])

    console.log(registers.toString());

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(data)
        }).then(() => {
            router.replace('/dashboard');
        })
    };

    return (
        <div className='h-screen w-full m-auto lg:w-[60%]'>
            <div className='rounded-md p-2'>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* To :</label>
                        <input className="bg-gray-100 normal appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="example@gmail.com" defaultValue={registers && registers} {...register('mail', { required: true })} />
                        {errors.mail && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Subject :</label>
                        <input className="bg-gray-100 normal appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="subject here" {...register('subject', { required: true })} />
                        {errors.subject && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Message :</label>
                        <textarea className="bg-gray-100 normal appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" defaultValue={`${cname} link : `} {...register('message', { required: true })} />
                        {errors.message && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <button className="mt-4 inline-flex items-center justify-center py-3 bg-blue-50 text-blue-500 rounded-lg font-semibold hover:bg-blue-100">
                        Send Mail
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Mail;
