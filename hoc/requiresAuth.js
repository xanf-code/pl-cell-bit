import { getSession } from "next-auth/react"

export function requiresAuth(gssp) {
    return async (ctx) => {
        const session = await getSession(ctx);

        if (!session) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/"
                }
            }
        }
        return await gssp(ctx);
    }
}