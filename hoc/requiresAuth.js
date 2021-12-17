import { getSession } from "next-auth/react"

export const requiresAuth = (
    sessionCondition = true,
    redirect = '/'
) => {
    return async function (ctx) {
        const session = await getSession(ctx);

        if (!session) {
            return {
                redirect: {
                    destination: redirect,
                    permanent: false,
                }
            }
        }
        return {
            props: {}
        }
    }
}