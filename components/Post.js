import Time from 'react-timeago'

function Post({ data }) {
    const truncate = (title, limit) => title?.length > limit ? title.substring(0, limit - 1) + '...' : title;

    return (
        <div className="bg-blue-50 p-2 m-2 rounded-md">
            <div className='p-4'>
                <h1 className="text-black font-semibold text-lg">{truncate(data.title, 50)}</h1>
            </div>
            <div className='flex px-4 justify-between'>
                <div className='flex'>
                    <img src={data.userPic} className="rounded-full h-10 w-10" />
                    <div className='pl-4'>
                        <h1>
                            <span className="font-semibold text-gray-500">{data.username}</span>
                        </h1>
                        <h1 className="text-xs font-semibold text-gray-500">
                            <Time date={data.created} />
                        </h1>
                    </div>
                </div>
                <div className='flex items-center bg-blue-200 rounded-md m-2'>
                    <h1 className="uppercase text-xs inline-block p-1 mx-1 font-semibold">{data.tag}</h1>
                </div>
            </div>
            <div>
                <p className="text-left p-4">{truncate(data.content, 250)}</p>
            </div>
        </div>
    );
}

export default Post;
