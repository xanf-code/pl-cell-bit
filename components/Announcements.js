import Timeago from 'react-timeago'
import moment from 'moment'
import { deleteBlog } from '../network/lib/news';
import Link from 'next/link';

function Announcements({ data, isAdmin }) {
    var oneDate = moment(data.time, 'DD-MM-YYYY')
    var oneDate = moment();
    var monthName = oneDate.format('MMMM');

    var date = moment(data.time, 'YYYY-MM-DD');
    date = date.format('DD');

    const truncate = (title, limit) => title?.length > limit ? title.substring(0, limit - 1) + '...see more' : title;

    async function deleteNews(id) {
        await deleteBlog(id);
    }

    return (
        <div className="flex">
            <div className="border-r-2 border-white pr-2">
                <h1 className="font-bold text-white">{monthName.substring(0, 3).toUpperCase()}</h1>
                <h1 className="flex justify-center text-white">{date}</h1>
            </div>
            <div className="pl-4">
                <h1 className="text-xs font-light text-gray-300">{data.username} | {<Timeago date={data.time} />}
                    {isAdmin && <h1 onClick={() => deleteNews(data._id)} className='cursor-pointer hover:underline underline-offset-2 inline pl-2'>Delete</h1>}
                </h1>
                <Link href={`/blogs/${data._id}`}>
                    <h1 className="text-xs font-normal text-blue-50 hover:text-blue-200">{truncate(data.title, 80)}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Announcements
