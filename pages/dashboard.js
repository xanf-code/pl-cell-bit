import { requiresAuth } from "../hoc/requiresauth"

export default function Dashboard() {
    return (
        <div>
            This is home page
        </div>
    )
}

// Needs better logic here
export const getServerSideProps = requiresAuth(async (ctx) => {
    return {
        props: {}
    }
})