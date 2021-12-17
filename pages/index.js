import { signOut, signIn, getSession, getProviders } from "next-auth/react"

export default function Home({ providers, data }) {
  console.log(data && data);
  return (
    <div className='flex flex-col'>
      {!data ? <div onClick={() => signIn(providers.google.id, {
        callbackUrl: `${window.location.origin}/dashboard`,
      })}>
        Sign In with {providers.google.name}
      </div> : <div onClick={() => signOut({ callbackUrl: "/" })}>
        Sign Out
      </div>}
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  return {
    props: {
      data: session,
      providers,
    }
  };
}