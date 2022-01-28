import { useEffect, useState } from "react"
import { getBlogs } from "../network/lib/news";
import Announcements from "./Announcements"
import { useSession } from "next-auth/react"
import { useRecoilValueLoadable } from "recoil"
import { getUserSelector } from "../State/Selectors/user";
import NewsModal from "./Admin/NewsModal";
import Link from "next/link";

function AnnounceBoard() {
    const [news, setNews] = useState([])

    const { data: session } = useSession()
    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    useEffect(async () => {
        const blogs = await getBlogs();
        setNews(blogs.data);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] overflow-y-auto scrollbar-hide md:ml-2 h-[50%] rounded-lg drop-shadow-xl">
            <div onClick={() => setModalOpen(true)} className="flex justify-between pr-4">
                <h1 className="pl-4 pt-4 text-white font-bold text-xl">Announcements 📢</h1>
                {user.contents.isAdmin && <div onClick={() => { }} className="cursor-pointer items-center flex mt-4 bg-blue-100 rounded-xl">
                    <h3 className="text-xs px-2 font-semibold relative">+ Add</h3>
                </div>}
            </div>
            {news.map(blog => {
                return (
                    <div className="space-y-4 p-4 cursor-pointer">
                        <Announcements
                            key={blog._id}
                            data={blog}
                            isAdmin={user && user.contents.isAdmin}
                        />
                    </div>
                )
            })}
            <NewsModal setIsOpen={setModalOpen} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default AnnounceBoard
