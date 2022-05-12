import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
