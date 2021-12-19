import { requiresAuth } from "../hoc/requiresauth"
import { getSession, useSession } from "next-auth/react"

//export const getServerSideProps = requiresAuth(true, '/')

export default function Dashboard() {
    //const { data: session } = useSession()

    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session.user.isVerified);
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