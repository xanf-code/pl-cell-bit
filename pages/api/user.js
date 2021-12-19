import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        res.send(session.user);
    } else {
        res.send({
            error: "No session",
        })
    }
}