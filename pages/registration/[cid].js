import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getCompany } from "../../network/lib/companies";
import { registerUser } from "../../network/lib/register";
import { getCompanyAtom } from "../../State/Atoms";
import { getUserSelector } from "../../State/Selectors/user";

export default function CompanyRegistration() {
    const { data: session } = useSession()
    const router = useRouter();
    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    const { cid } = router.query;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        registerUser(cid, session && session.user.uid, data.Backlogs, data.CGPA, data.Degree, data.Department, data.Email, data.Name, data.Phone, data.USN, data.XIIth, data.Xth).then(() => {
            router.replace("/dashboard");
        });
    };

    return (
        <div className="flex flex-col min-h-screen items-center">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Name :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Name" defaultValue={user.contents.name} {...register('Name', { required: true })} />
                    {errors.Name && <p className="font-semibold text-red-500 pl-4 pt-2">Name cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* USN :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 uppercase focus:outline-none focus:bg-white focus:border-purple-500" placeholder="USN" defaultValue={user.contents.user_meta.USN} {...register('USN', { required: true })} />
                    {errors.USN && <p className="font-semibold text-red-500 pl-4 pt-2">USN cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Email :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Email" defaultValue={user.contents.email} {...register('Email', { required: true })} />
                    {errors.Email && <p className="font-semibold text-red-500 pl-4 pt-2">Email cannot be empty.</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Phone :</label>
                    <input minLength={10} maxLength={10} className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Phone" defaultValue={user.contents.user_meta.phone} {...register('Phone', { required: true })} />
                    {errors.Phone && <p className="font-semibold text-red-500 pl-4 pt-2">Invalid Number.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Degree :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Degree", { required: true })}>
                        <option value="BE">BE</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBA">MBA</option>
                    </select>
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Select Department :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Department", { required: true })}>
                        <option value="CSE">CSE</option>
                        <option value="ISE">ISE</option>
                    </select>
                </div>
                <div className="flex justify-between pt-4">
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pb-2">* 10th % or CGPA :</label>
                        <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" {...register('Xth', { required: true })} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pb-2">12th/Diploma % or CGPA :</label>
                        <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" {...register('XIIth', { required: false })} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pb-2">UG/PG % or CGPA :</label>
                        <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" defaultValue={user.contents.user_meta.CGPA} {...register('CGPA', { required: false })} />
                    </div>
                </div>
                <div className="flex flex-col flex-1 pb-4">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Number of backlogs :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Backlogs", { required: true })}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <button className="inline-flex items-center justify-center py-3 bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg font-semibold">
                    Register Now
                </button>
            </form>
        </div>
    )
}