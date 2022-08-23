import Navbar from '../components/navbar'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
  	return <>
	<Navbar />

	<Component {...pageProps} />
  	</>
}