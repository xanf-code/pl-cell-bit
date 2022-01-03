import Announcements from "./Announcements"

function AnnounceBoard() {
    return (
        <div className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] overflow-y-auto scrollbar-hide md:ml-2 h-[50%] rounded-lg drop-shadow-xl">
            <h1 className="pl-4 pt-4 text-white font-bold text-xl">Announcements 📢</h1>
            <div className="space-y-4 p-4">
                <Announcements />
                <Announcements />
                <Announcements />
                <Announcements />
                <Announcements />
                <Announcements />
                <Announcements />
            </div>
        </div>
    )
}

export default AnnounceBoard
