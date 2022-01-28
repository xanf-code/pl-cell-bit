import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { addNews } from '../../network/lib/news';
import { useSession } from 'next-auth/react';

export default function NewsModal({ isOpen, onClose, setIsOpen }) {

    const { data: session } = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        await addNews(data);
        setIsOpen(false);
    };

    return (
        <div className=''>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Username  :</label>
                        <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" defaultValue={session && session.user.name} {...register('username', { required: true })} />
                        {errors.username && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Tile  :</label>
                        <input className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" {...register('title', { required: true })} />
                        {errors.title && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Content  :</label>
                        <textarea className="bg-gray-100 font-bold appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 capitalize focus:outline-none focus:bg-white focus:border-purple-500" {...register('content', { required: true })} />
                        {errors.content && <p className="font-semibold text-red-500 pl-4 pt-2">Field cannot be empty.</p>}
                    </div>
                    <button className="inline-flex items-center justify-center py-3 my-3 bg-blue-600 text-blue-50 rounded-lg font-semibold">
                        Add News
                    </button>
                </form>
            </Modal>
        </div>
    );
}
