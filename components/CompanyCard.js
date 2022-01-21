import Link from "next/link"
import ReactTimeago from "react-timeago"

function CompanyCard({ company }) {
    return (
        <div className="bg-[#fbfbff] rounded-md h-full">
            <div className="flex justify-between px-6 py-4 items-center">
                <div className="w-20">
                    <img src={company.companyLogo} />
                </div>
                <div className="font-normal text-xs text-gray-400">
                    <ReactTimeago date={company.postDate} />
                </div>
            </div>
            <div className="px-6 pb-2 items-center">
                <div className="font-bold text-xl">
                    {company.companyName}
                </div>
            </div>
            <div className="flex px-6 justify-between">
                <div className="bg-gradient-to-r from-[#396afc] to-[#2948ff] p-1 rounded-xl">
                    <h3 className="text-white font-normal text-xs mx-2">{company.salary}</h3>
                </div>
                <div className="bg-blue-100 p-1 hover:bg-blue-200 rounded-xl cursor-pointer transtition duration-300 ease-in-out">
                    <h3 className="text-white font-normal text-xs mx-2 ">⬇ <span className="text-black font-semibold">PDF</span></h3>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="bg-gray-100 rounded-md p-2">
                    <div className="text-normal text-gray-800 font-semibold pb-1">🏢 Eligibility</div>
                    <div className="text-sm text-gray-500 font-normal">Branch : <span className="text-black font-normal">
                        {company.eligibility.branches}</span></div>
                    <div className="text-sm text-gray-500 font-normal">Academics : <span className="text-black font-normal">
                        {company.eligibility.academics}</span></div>
                    <div className="text-sm text-gray-500 font-normal">Backlogs : <span className="text-black font-normal">
                        {company.eligibility.backlogs}</span></div>
                </div>
            </div>
            <Link href={`registration/${company._id}`}>
                <div className="px-6 pb-6">
                    <div className="bg-[#3f6cdf] hover:bg-[#5a7bd0] p-4 rounded-md cursor-pointer transtition duration-300 ease-in-out">
                        <h3 className="text-white font-semibold justify-center flex">Apply</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CompanyCard
