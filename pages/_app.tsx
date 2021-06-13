import '../styles/globals.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import useDarkMode, { DarkMode } from 'use-dark-mode';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const darkMode:DarkMode = useDarkMode(true);

      return (
        <>
        <Navbar {...darkMode}/>
        <Component {...pageProps}/>
        <Footer />
        </>
      )
}
export default MyApp
