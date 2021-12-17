import { requiresAuth } from "../hoc/requiresauth"

export const getServerSideProps = requiresAuth(true, '/')

function Dashboard() {
    return (
        <div>
            This is home page
        </div>
    )
}

export default Dashboard;