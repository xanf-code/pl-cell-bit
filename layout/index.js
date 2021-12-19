import { MenuIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { sidebarMenu } from '../State/Atoms';
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"

function Layout({ children }) {
    const [isSidebarOpen, setisSidebarOpen] = useRecoilState(sidebarMenu);
    const [pageURL, setPageURL] = useState("");
    const { data: session } = useSession()

    useEffect(() => {
        setPageURL(window.location.pathname);
    }, [pageURL]);

    return (
        <div className='bg-[#e8e9ee] min-h-screen'>
            {pageURL != '/' && pageURL != '/onboarding' &&
                <button className='p-5' onClick={() => setisSidebarOpen(true)}>
                    <MenuIcon className='h-7 w-7 text-black cursor-pointer' />
                </button>}
            <main>
                <Sidebar />
                {children}
            </main>
        </div>
    )
}

export default Layout
