import { useSession } from "next-auth/react";
import { useRecoilValueLoadable } from "recoil"
import CompanyCard from "../components/CompanyCard";
import { filteredCompanySelector } from "../State/Selectors/filteredComp"

export default function Applied() {

    const { data: session } = useSession()

    const filteredList = useRecoilValueLoadable(filteredCompanySelector(session && session.user.uid));

    return (
        <div className="h-screen w-full m-auto lg:w-[80%]">
            <div className="pl-2 md:pl-4 pr-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 last:pb-4">
                    {filteredList.state === "hasValue" && filteredList.contents.map((company) => (
                        <CompanyCard key={company._id} company={company} />
                    ))}
                </div>
            </div>
        </div>
    )
}