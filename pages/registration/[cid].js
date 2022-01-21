import { useRouter } from "next/router"

function CompanyRegistration() {
    const router = useRouter()
    const { cid } = router.query
    return (
        <div>
            <h1 className="font-bold text-white">{cid}</h1>
        </div>
    )
}

export default CompanyRegistration
