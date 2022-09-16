import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <div id='page' className='dark:bg-light-background bg-dark-background'>
		<Component {...pageProps} />
  </div >
}
