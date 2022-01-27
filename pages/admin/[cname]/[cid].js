import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSingleCompany } from "../../../network/lib/companies";
import CsvDownload from 'react-json-to-csv';
import Registers from "../../../components/Admin/Registers";
import Link from "next/link";

export default function AdminView() {
    const router = useRouter();
    const [registers, setRegisters] = useState([]);

    const { cid, cname } = router.query;

    useEffect(() => {
        getSingleCompany(cid && cid)
            .then(data => {
                setRegisters(data.data.registration);
            })
    }, [])

    return (
        <div className="h-screen w-full m-auto lg:w-[80%]">
            <div className="py-4">
                <div className="flex">
                    <CsvDownload
                        data={registers}
                        filename={`${cname} shortlist.csv`}
                    >
                        <div className="bg-blue-50 p-4 rounded-md hover:bg-blue-100">
                            <h1 className="text-blue-500 font-semibold">Download {cname} Shortlist ⬇️</h1>
                        </div>
                    </CsvDownload>
                    <Link href={`/admin/${cname}/${cid}/mail`}>
                        <div className="bg-blue-50 p-4 rounded-md hover:bg-blue-100 ml-4 cursor-pointer">
                            <h1 className="text-blue-500 font-semibold">Email to all Shortlists 📤</h1>
                        </div>
                    </Link>
                </div>
            </div>
            {
                registers.map((register) => (
                    <div className="py-2">
                        <Registers comp={register} cname={cname} />
                    </div>
                ))
            }
        </div >
    );
}