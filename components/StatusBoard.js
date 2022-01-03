import { useRecoilState } from "recoil"
import { adminStatusModal } from "../State/Atoms"

function StatusBoard() {
    const [statusModal, setStatusModal] = useRecoilState(adminStatusModal)
    return (
        <div className="bg-red-400 h-[35%] md:ml-2 mt-4 bg-gradient-to-r from-[#0652c5] to-[#d4418e] overflow-y-auto scrollbar-hide rounded-lg drop-shadow-xl">
            <div className="flex justify-between pr-4">
                <h1 className="pl-4 pt-4 text-white font-bold text-xl">Status Board ⚡️</h1>
                <div onClick={() => setStatusModal(!statusModal)} className="cursor-pointer items-center flex mt-4 bg-blue-100 rounded-xl">
                    <h3 className="text-xs px-2 font-semibold relative">+ Add</h3>
                </div>
            </div>
            <div className="flex space-x-4 px-4 py-2">
                <h1 className="text-white font-medium text-xs">🔴  Pending</h1>
                <h1 className="text-white font-medium text-xs">🔵  Ongoing</h1>
                <h1 className="text-white font-medium text-xs">🟠  Over</h1>
            </div>
            <div className="px-4 grid grid-cols-3 gap-3 pt-4">
                <h1 className="text-white font-semibold">🔵 Oracle</h1>
                <h1 className="text-white font-semibold">🔵 PhonePe</h1>
                <h1 className="text-white font-semibold">🔵 Juspay</h1>
                <h1 className="text-white font-semibold">🔴 Nextuple</h1>
                <h1 className="text-white font-semibold">🔵 Keka</h1>
                <h1 className="text-white font-semibold">🟠 Cisco</h1>
                <h1 className="text-white font-semibold">🔵 EasyGov</h1>
                <h1 className="text-white font-semibold">🔴 Allstate</h1>
                <h1 className="text-white font-semibold">🔵 Infosys</h1>
                <h1 className="text-white font-semibold">🔴 TCS</h1>
            </div>
        </div >
    )
}

export default StatusBoard
