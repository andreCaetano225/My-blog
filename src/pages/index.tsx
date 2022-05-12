import type { NextPage } from 'next'
import { Bio } from '../components/bio'
import { Header } from '../components/header'
import { Perfil } from '../components/perfil'
import { useHooksApp } from '../hooks/app_hooks'
import styles from '../styles/index.module.scss'

const Home: NextPage = () => {
  const { clickTheme, themes } = useHooksApp()
  return (
    <>
      <Header themes={themes} onClickButtonTheme={clickTheme} />
      <Perfil themes={themes} />
      <Bio themes={themes} />
    </>
  )
}

export default Home
