import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from 'next/head'
import Meta from '../components/Meta'
import {
  ApolloProvider,
} from "@apollo/client";
import client from '../graphql/client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <Meta />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <div className="p-6">
          <Nav />
        </div>
        <div className="mb-auto content">
          <main className="px-3 flex flex-col justify-center">
            <Component {...pageProps} />
          </main>
        </div>
        <div className="h-10">
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default MyApp
