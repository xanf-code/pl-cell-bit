import '../styles/globals.css'
import Layout from '../layout'
import { RecoilRoot } from 'recoil';
import { SessionProvider } from "next-auth/react"
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

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
