import { useRecoilState } from "recoil"
import { adminStatusModal } from "../../State/Atoms"
import { useForm } from 'react-hook-form';

function StatusModal() {
    const [statusModal, setStatusModal] = useRecoilState(adminStatusModal)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setStatusModal(!statusModal)
    };

    return (
        <div className="bg-red-400 h-[35%] md:ml-2 mt-4 bg-gradient-to-r from-[#0652c5] to-[#d4418e] overflow-y-auto scrollbar-hide rounded-lg drop-shadow-xl">
            <div className="flex justify-between pr-4">
                <h1 className="pl-4 pt-4 text-white font-bold text-xl">Add Status</h1>
                <div onClick={() => setStatusModal(!statusModal)} className="cursor-pointer items-center flex mt-4 bg-blue-100 rounded-xl">
                    <h3 className="text-xs px-2 font-semibold relative">🔙 Back</h3>
                </div>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-white text-sm pl-4 pt-4 pb-2">Company :</label>
                <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Company Name" {...register('Company', { required: true })} />
                {errors.Company && <p className="font-semibold text-red-500 pl-4 pt-2">Company Name cannot be empty.</p>}
                <label className="text-white text-sm pl-4 pt-4 pb-2">Select Type :</label>
                <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("Status", { required: true })}>
                    <option value="🔴">🔴  Pending</option>
                    <option value="🔵">🔵  Ongoing</option>
                    <option value="🟠">🟠  Over</option>
                </select>
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
        </div >
    )
}

export default StatusModal
