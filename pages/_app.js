import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="body">
        <Nav />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
