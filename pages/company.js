import { requiresAuth } from "../hoc/requiresauth"

export const getServerSideProps = requiresAuth(true, '/')

function Company() {
    return (
        <div className='p-4'>
            <h1>This is a company page</h1>
        </div>
    )
}

export default Company
