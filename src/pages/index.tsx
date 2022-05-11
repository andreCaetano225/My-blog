import type { NextPage } from 'next'
import { Header } from '../components/header'
import { useHooksApp } from '../hooks/app_hooks'

const Home: NextPage = () => {
  const { clickTheme, theme } = useHooksApp()
  return (
    <>
      <Header theme={theme} onClickButtonTheme={clickTheme} />
    </>
  )
}

export default Home
