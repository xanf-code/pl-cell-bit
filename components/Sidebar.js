import { HomeIcon, BellIcon, CashIcon, PencilAltIcon, CalendarIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useRecoilState } from 'recoil'
import { sidebarMenu } from '../State/Atoms'
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"

function Sidebar() {
    const [isSidebarOpen, setisSidebarOpen] = useRecoilState(sidebarMenu);
    const { data: session } = useSession()

    const handleSidebar = () => {
        setisSidebarOpen(false);
    }

    return (
        <div className={`w-[70%] md:w-[20%] overflow-hidden bg-white shadow-xl text-gray-500 overflow-y-scroll scrollbar-hide fixed inset-y-0 left-0 transform ${!isSidebarOpen && '-translate-x-full'} transition duration-200 ease-in-out z-10`}>
            <div className='flex justify-between px-4 pt-6'>
                <XIcon onClick={() => setisSidebarOpen(false)} className='text-black h-7 w-7 cursor-pointer' />
                <div className='flex'>
                    {session && (
                        <Image className='border rounded-full' height={30} width={30} src={session.user.image} />
                    )}
                    <div className='pl-2 flex items-center'>{session && session.user.tag.charAt(0).toUpperCase() + session.user.tag.slice(1)}</div>
                </div>
            </div>
            <div className='space-y-5 p-5'>
                <Link href="/dashboard">
                    <button onClick={() => handleSidebar()} className='flex items-center space-x-3' >
                        <HomeIcon className='h-5 w-5 text-black' />
                        <p className='text-black font-semibold hover:text-gray-500'>Home</p>
                    </button>
                </Link>
                <Link href='/CRDates'>
                    <button onClick={() => handleSidebar()} className='flex items-center space-x-3'>
                        <CalendarIcon className='h-5 w-5 text-black' />
                        <p className='text-black font-semibold hover:text-gray-500'>CR Dates</p>
                    </button>
                </Link>
                <button onClick={() => handleSidebar()} className='flex items-center space-x-3'>
                    <BellIcon className='h-5 w-5 text-black' />
                    <p className='text-black font-semibold hover:text-gray-500'>Announcements</p>
                </button>
                <Link href='/applied'>
                    <button onClick={() => handleSidebar()} className='flex items-center space-x-3'>
                        <CashIcon className='h-5 w-5 text-black' />
                        <p className='text-black font-semibold hover:text-gray-500'>Applied</p>
                    </button>
                </Link>
                <button onClick={() => handleSidebar()} className='flex items-center space-x-3' >
                    <PencilAltIcon className='h-5 w-5 text-black' />
                    <p className='text-black font-semibold hover:text-gray-500'>Edit Details</p>
                </button>
            </div>
            <div className='px-5'>
                {session && <div onClick={() => signOut({ callbackUrl: "/" })} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white transtition duration-300 ease-in-out bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 w-full">
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z" fill="currentColor" /><path d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z" fill="currentColor" /></svg>
                    <span className="relative">Sign Out</span>
                </div>
                }
            </div>
        </div>
    )
}

export default Sidebar
