import '../styles/globals.css'
import Layout from '../layout'
import { RecoilRoot } from 'recoil';
import { SessionProvider } from "next-auth/react"
import { Suspense } from "react";

function MyApp({ Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </RecoilRoot>
  )
}

export default MyApp
