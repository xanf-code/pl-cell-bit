import { MenuIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { sidebarMenu } from '../State/Atoms';
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react';

function Layout({ children }) {
    const [isSidebarOpen, setisSidebarOpen] = useRecoilState(sidebarMenu);
    const [pageURL, setPageURL] = useState("");

    useEffect(() => {
        setPageURL(window.location.pathname);
    }, [pageURL]);

    return (
        <div className='bg-[#e8e9ee] min-h-screen'>
            {pageURL != '/' && pageURL != '/onboarding' && !pageURL.startsWith('/registration') &&
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
