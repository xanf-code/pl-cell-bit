import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deletePost, getPostByID } from "../../network/lib/forum";
import Time from 'react-timeago'
import { useSession } from 'next-auth/react';
import { useRecoilValueLoadable } from "recoil";
import { getUserSelector } from "../../State/Selectors/user";

export default function IndividualPosts({ post }) {
    const { data: session } = useSession()

    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    const router = useRouter();

    async function removePost(id) {
        await deletePost(id);
        router.replace("/boards");
    }

    return (
        <div className="h-screen w-full m-auto lg:w-[50%]">
            <h1 className="font-bold text-xl text-center py-2">{post.title}</h1>
            <div className="flex justify-between py-2 px-2">
                <div className="flex">
                    <img src={post.userPic} className="rounded-full h-10 w-10" />
                    <h1 className="font-semibold text-gray-500 items-center flex pl-2">{post.username}</h1>
                </div>
                <h1 className="text-xs font-semibold text-gray-500 items-center flex">
                    <Time date={post.created} />
                </h1>
            </div>
            <div className="flex justify-between">
                <div className="bg-blue-500 rounded-md">
                    <h1 className="text-blue-50 uppercase text-sm inline-block p-1 mx-1">{post.tag}</h1>
                </div>
                {user.contents.isAdmin || session && session.user.uid == post.uid ? <div onClick={() => removePost(post._id)}>
                    <h1 className="hover:underline underline-offset-2 cursor-pointer text-sm pr-4 flex items-center">Delete</h1>
                </div> : null}
            </div>
            <p className="text-left p-2">{post.content}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { fid } = context.query;

    const resp = await getPostByID(fid);

    return {
        props: {
            post: resp.data
        }
    }
}