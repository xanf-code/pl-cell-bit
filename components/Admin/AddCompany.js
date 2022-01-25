import { useForm } from 'react-hook-form';
import { XIcon } from '@heroicons/react/outline';
import { addCompany } from '../../network/lib/companies';

export default function AddCompany({ openCompanyModal, companyModal }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        addCompany(data).then(() => {
            openCompanyModal(false);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="rounded-md p-2 bg-white sm:w-[50%] h-[80%] overflow-y-auto">
            <div onClick={() => openCompanyModal(!companyModal)} className='flex justify-end pt-2 cursor-pointer pr-4'>
                <XIcon className="w-6" />
                <h1>Close</h1>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Company Name :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Company Name" {...register('CompanyName', { required: true })} />
                    {errors.CompanyName && <p className="font-semibold text-red-500 pl-4 pt-2">Company Name cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Company Logo :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Logo" {...register('CompanyLogo', { required: true })} />
                    {errors.CompanyLogo && <p className="font-semibold text-red-500 pl-4 pt-2">Logo cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Salary :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500 uppercase" placeholder="10L + 2L" {...register('Salary', { required: true })} />
                    {errors.Salary && <p className="font-semibold text-red-500 pl-4 pt-2">Salary cannot be empty.</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">PDF Link :</label>
                    <input minLength={10} maxLength={10} className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Link..." defaultValue=" " {...register('PDF', { required: false })} />
                </div>
                <h1 className='pl-4 pt-4 font-semibold text-lg'>Eligibility</h1>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Branches :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="CSE and ISE" {...register('Branches', { required: true })} />
                    {errors.Branches && <p className="font-semibold text-red-500 pl-4 pt-2">Branches cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Academics :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="6.5 and above" {...register('Academics', { required: true })} />
                    {errors.Academics && <p className="font-semibold text-red-500 pl-4 pt-2">Academics cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Backlogs :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Upto 1 backlogs allowed" {...register('Backlogs', { required: true })} />
                    {errors.Backlogs && <p className="font-semibold text-red-500 pl-4 pt-2">Backlogs cannot be empty.</p>}
                </div>
                <h1 className='pl-4 pt-4 font-semibold text-lg'>Information</h1>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Bond :</label>
                    <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" placeholder="No bond" {...register('Bond', { required: true })} />
                    {errors.Bond && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">* Internship :</label>
                    <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Internship", { required: true })}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    {errors.Internship && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                </div>
                <div className="flex flex-col flex-1 pb-2">
                    <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Extra Info :</label>
                    <textarea className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" defaultValue=" " placeholder="something here..." {...register('Extras', { required: false })} />
                </div>
                <button className="inline-flex items-center justify-center py-3 bg-blue-600 text-blue-50 rounded-lg font-semibold">
                    Add Company
                </button>
            </form>
        </div>
    )
}