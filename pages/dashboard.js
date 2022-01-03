import { requiresAuth } from "../hoc/requiresauth"
import { getSession, useSession } from "next-auth/react"
import AnnounceBoard from "../components/AnnounceBoard";
import StatusBoard from "../components/StatusBoard";
import CompanyCard from "../components/CompanyCard";
import { useRecoilValue } from "recoil";
import { adminStatusModal } from "../State/Atoms";
import StatusModal from "../components/Admin/StatusModal";

//export const getServerSideProps = requiresAuth(true, '/')

export default function Dashboard() {
    //const { data: session } = useSession()
    const modal = useRecoilValue(adminStatusModal)
    const test = [];
    for (let i = 1; i <= 24; i++) {
        test.push(<CompanyCard />);
    }
    return (
        <div className="flex min-h-screen">
            <div className="w-full md:h-screen md:overflow-y-auto md:scrollbar-hide pl-2 md:pl-4 pr-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 last:pb-4">
                    {test}
                </div>
            </div>
            <div className="w-[30%] overscroll-y-none hidden md:flex md:flex-col">
                <AnnounceBoard />
                {modal == true ? <StatusBoard /> : <StatusModal />}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session.user.isVerified == null) {
        return {
            redirect: {
                destination: '/onboarding',
                permanent: true
            }
        }
    }
    return {
        props: {
            data: session,
        }
    };
}