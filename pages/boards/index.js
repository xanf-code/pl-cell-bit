import Link from "next/link";
import { useEffect, useState } from "react";
import ForumModel from "../../components/ForumModel";
import Post from "../../components/Post";
import { getForumPosts } from "../../network/lib/forum";

function BlogsPage() {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(async () => {
        const resp = await getForumPosts();
        setPosts(resp.data);
    }, [])

    return (
        <div className="min-h-screen w-full m-auto lg:w-[80%]">
            <div onClick={() => setModalOpen(true)} className="cursor-pointer inline-flex items-center justify-center p-3 text-blue-600 bg-blue-50 rounded-lg font-semibold ml-6 mb-4 hover:bg-blue-100 ease-in-out transition duration-200">
                <h1>Add your blog now 🚀</h1>
            </div>
            <div className="pl-2 md:pl-4 pr-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 last:pb-4">
                    {posts.map((post) => (
                        <Link href={`/boards/${post._id}`}>
                            <div className="cursor-pointer hover:-translate-y-2 ease-in-out transition duration-300">
                                <Post key={post._id} data={post} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <ForumModel isOpen={modalOpen} onClose={() => setModalOpen(false)} setIsOpen={setModalOpen} />
        </div>
    );
}

export default BlogsPage;
