import type { NextPage } from 'next'
import { Bio } from '../components/bio'
import { Header } from '../components/header'
import { Perfil } from '../components/perfil'
import { useHooksApp } from '../hooks/app_hooks'

const Home: NextPage = () => {
  const { clickTheme, theme } = useHooksApp()
  return (
    <>
      <Header theme={theme} onClickButtonTheme={clickTheme} />
      <Perfil theme={theme} />
      <Bio />
    </>
  )
}

export default Home
