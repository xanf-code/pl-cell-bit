import { requiresAuth } from "../hoc/requiresauth"
import { getSession } from "next-auth/react"
import { useForm } from 'react-hook-form';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Onboarding({ userdata }) {
    const [form, setForm] = useState();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setForm({
            user_meta: data
        });
        //Route when process complete
        router.replace('/dashboard');
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Image className='border rounded-full' height={80} width={80} src={userdata.user.image} />
            <h1 className="font-semibold text-xl md:text-3xl py-4">
                {userdata.user.name}⚡️👋
            </h1>
            <div className="bg-white w-[90%] md:w-[50%] rounded-md shadow-md">
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">USN :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" placeholder="USN" {...register('USN', { required: true })} />
                    {errors.USN && <p className="font-semibold text-red-500 pl-4 pt-2">USN cannot be empty.</p>}
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Select Semester :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Semester", { required: true })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Select Department :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Department", { required: true })}>
                        <option value="CSE">CSE</option>
                        <option value="ISE">ISE</option>
                    </select>
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">CGPA :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="CGPA" {...register('CGPA', { pattern: /\d+/, required: true, min: 1, max: 10 })} />
                    {errors.CGPA && <p className="font-semibold text-red-500 pl-4 pb-2">Enter valid CGPA.</p>}
                    <div className="py-4 flex justify-center">
                        <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white font-semibold">Save Details 🚀</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session.user.isVerified == true) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }
    return {
        props: {
            userdata: session,
        }
    };
}
