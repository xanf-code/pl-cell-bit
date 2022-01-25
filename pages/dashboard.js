//import { requiresAuth } from "../hoc/requiresauth"
import { getSession, useSession } from "next-auth/react"
import AnnounceBoard from "../components/AnnounceBoard";
import StatusBoard from "../components/StatusBoard";
import CompanyCard from "../components/CompanyCard";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { adminStatusModal, filterCompanyAtom, getUserAtom } from "../State/Atoms";
import StatusModal from "../components/Admin/StatusModal";
import { useState } from "react";
import { getUserSelector } from "../State/Selectors/user";
import AddCompany from "../components/Admin/AddCompany";
import { companySelector } from "../State/Selectors/companies";
//export const getServerSideProps = requiresAuth(true, '/')

export default function Dashboard() {
    const { data: session } = useSession()

    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    const modal = useRecoilValue(adminStatusModal)

    const [companyModal, openCompanyModal] = useState(false);

    const companyData = useRecoilValueLoadable(companySelector);

    const [filterComp, setFilterComp] = useRecoilState(filterCompanyAtom);

    const [userAtom, setUserAt] = useRecoilState(getUserAtom);

    setUserAt(session && session);

    return (
        <div className="flex min-h-screen">
            <div className="w-full md:h-screen md:overflow-y-auto md:scrollbar-hide pl-2 md:pl-4 pr-2">
                {user.contents.isAdmin &&
                    <div onClick={() => openCompanyModal(!companyModal)} className="bg-blue-50 hover:bg-blue-100 transtition duration-300 ease-in-out rounded-md p-2 m-2 cursor-pointer">
                        <h1 className="text-blue-500 font-semibold text-lg flex justify-center">Click here to add a Company</h1>
                    </div>}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 last:pb-4">
                    {companyData.state === "hasValue" && companyData.contents.map((company) => (
                        <CompanyCard key={company._id} company={company} />
                    ))}
                </div>
            </div>
            <div className="w-[30%] overscroll-y-none hidden md:flex md:flex-col">
                <AnnounceBoard />
                {modal == true ? <StatusBoard /> : <StatusModal />}
            </div>
            {
                companyModal && <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
                    <AddCompany openCompanyModal={openCompanyModal} companyModal={companyModal} />
                </div>
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session.user.isVerified == null) {
        return {
            redirect: {
                destination: '/onboarding',
                permanent: false
            }
        }
    }
    return {
        props: {
            data: session,
        }
    };
}