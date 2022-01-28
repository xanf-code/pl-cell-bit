import { useSession } from "next-auth/react"
import { useRecoilState, useRecoilValueLoadable } from "recoil"
import { deleteStatus } from "../network/lib/status"
import { adminStatusModal } from "../State/Atoms"
import { statusSelector } from "../State/Selectors/status"
import { getUserSelector } from "../State/Selectors/user";

function StatusBoard() {
    const { data: session } = useSession()
    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    const [statusModal, setStatusModal] = useRecoilState(adminStatusModal)
    const statusData = useRecoilValueLoadable(statusSelector)

    function adminDeleteStatus(sid) {
        user.contents.isAdmin ? deleteStatus(sid) : null;
    }

    return (
        <div className="bg-red-400 h-[35%] md:ml-2 mt-4 bg-gradient-to-r from-[#0652c5] to-[#d4418e] overflow-y-auto scrollbar-hide rounded-lg drop-shadow-xl">
            <div className="flex justify-between pr-4">
                <h1 className="pl-4 pt-4 text-white font-bold text-xl">Status Board ⚡️</h1>
                {user.contents.isAdmin && <div onClick={() => setStatusModal(!statusModal)} className="cursor-pointer items-center flex mt-4 bg-blue-100 rounded-xl">
                    <h3 className="text-xs px-2 font-semibold relative">+ Add</h3>
                </div>}
            </div>
            <div className="flex space-x-4 px-4 py-2">
                <h1 className="text-white font-medium text-xs">🔴  Pending</h1>
                <h1 className="text-white font-medium text-xs">🔵  Ongoing</h1>
                <h1 className="text-white font-medium text-xs">🟠  Over</h1>
            </div>
            <div className="px-4 grid grid-cols-3 gap-3 pt-4">
                {statusData.state === "hasValue" && statusData.contents.map((status) => {
                    return (
                        <h1 key={status._id} onClick={() => adminDeleteStatus(status._id)} className={`${user.contents.isAdmin && 'cursor-pointer hover:underline underline-offset-4'} text-white font-semibold`}>{status.status} {status.company}</h1>
                    )
                })}
            </div>
        </div >
    )
}

export default StatusBoard
