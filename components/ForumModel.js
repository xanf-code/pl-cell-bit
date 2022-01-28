import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { addPost } from '../network/lib/forum';

export default function ForumModel({ isOpen, onClose, setIsOpen }) {

    const { data: session } = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        await addPost(data, session.user.uid, session.user.image, session.user.name);
        setIsOpen(false);
    };

    return (
        <div className='w-[50%]'>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="flex flex-col flex-1">
                        <label className="font-semibold text-gray-500 pl-4 pt-4 pb-2">Tag :</label>
                        <select className="bg-gray-100 border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 font-bold focus:outline-none focus:bg-white focus:border-purple-500" {...register("tag", { required: true })}>
                            <option value="Interview">Interview</option>
                            <option value="Personal">Personal</option>
                            <option value="Education">Education</option>
                            <option value="Suggestion">Suggestion</option>
                        </select>
                    </div>
                    <button className="inline-flex items-center justify-center py-3 my-3 bg-blue-600 text-blue-50 rounded-lg font-semibold">
                        Add Blog
                    </button>
                </form>
            </Modal>
        </div>
    );
}
