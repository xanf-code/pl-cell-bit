import { MenuIcon } from '@heroicons/react/outline'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { sidebarMenu } from '../State/Atoms';
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserSelector } from '../State/Selectors/user';

function Layout({ children }) {
    const [isSidebarOpen, setisSidebarOpen] = useRecoilState(sidebarMenu);
    const [pageURL, setPageURL] = useState("");

    const { data: session } = useSession()

    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    useEffect(() => {
        setPageURL(window.location.pathname);
    }, [pageURL]);

    return (
        <div className='bg-[#e8e9ee] min-h-screen'>
            {pageURL != '/' && pageURL != '/onboarding' && !pageURL.startsWith('/registration') &&
                <div className='flex justify-between'>
                    <button className='p-6' onClick={() => setisSidebarOpen(true)}>
                        <MenuIcon className='h-7 w-7 text-black cursor-pointer' />
                    </button>
                    <div className='flex items-center px-2'>
                        <img className='h-10 w-10 mr-2 rounded-full' src={session && session.user.image} />
                        <div>
                            <h1 className='pl-2 font-semibold text-base'>{session && session.user.name} 🚀</h1>
                            <div className='flex pl-2'>
                                <div className='bg-blue-200 rounded-md inline-block'>
                                    <h2 className='mx-1 text-xs font-semibold px-1 py-1'>Status :</h2>
                                </div>
                                {user && user.contents.isAdmin ? <h1 className='pl-1.5 text-xs font-semibold flex items-center'>Admin</h1> : <h1 className='pl-1.5 text-xs font-semibold flex items-center'>Student</h1>}
                            </div>
                        </div>
                    </div>
                </div>}
            <main>
                <Sidebar />
                {children}
            </main>
        </div>
    )
}

export default Layout
