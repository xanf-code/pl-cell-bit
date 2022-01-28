import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getNewsID } from "../../network/lib/news";
import Time from 'react-timeago'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    const router = useRouter()
    const { bid } = router.query

    useEffect(async () => {
        const resp = await getNewsID(bid);
        setBlogs(resp.data)
    }, []);

    return (
        <div className="h-screen w-full m-auto lg:w-[50%]">
            <h1 className="font-bold text-xl text-center">{blogs.title}</h1>
            <div className="flex justify-between py-2 px-2">
                <h1 className="font-semibold text-gray-500">{blogs.username}</h1>
                <Time date={blogs.time} />
            </div>
            <p className="text-left p-2">{blogs.content}</p>
        </div>
    );
}

export default Blogs;
