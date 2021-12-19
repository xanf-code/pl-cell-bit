import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '../../../adapter/mongodb'
import { useRouter } from 'next/router'

export default nextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session, user }) {
            session.user.tag = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();

            session.user.uid = user.id;
            session.user.isVerified = user.emailVerified;
            return session;
        },
    },
    // events: {
    //     signIn: async ({ user }) => {
    //         const router = useRouter();
    //         if (user.emailVerified != null) {
    //             router.push("/dashboard");
    //         }
    //         else {
    //             router.push("/onboarding");
    //         }
    //         // ctx.res.writeHead(302, {
    //         //     Location: `/company`
    //         // })
    //         // ctx.res.end()
    //     }
    // }
    // events: {
    //     createUser: async ({ user }) => {
    //         let dbCon = await clientPromise;
    //         const userCollection = dbCon.db("plcellusers").collection("users");
    //         const userData = await userCollection.findOne({ id: user.id });

    //         if (!userData) {
    //             await userCollection.insert({
    //                 id: user.id,
    //                 name: user.name,
    //                 email: user.email,
    //                 picture: user.image,
    //                 isAdmin: false,
    //                 user_meta: {
    //                     department: "",
    //                     semester: "",
    //                     USN: "",
    //                     CGPA: "",
    //                 }
    //             });
    //         }
    //     }
    // }
})