import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute='class'>
      <Component {...pageProps}/>
    </ThemeProvider>
    <Analytics />
    </>
  )
}

export default MyApp
