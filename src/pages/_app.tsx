import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider disableTransitionOnChange>
      <Head>
        <title>André Sousa - Portfólio</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
