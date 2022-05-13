import type { NextPage } from 'next'
import { Bio } from '../components/bio'
import { Finally } from '../components/finally'
import { Header } from '../components/header'
import { Perfil } from '../components/perfil'
import { Projetos } from '../components/projetos'
import { useHooksApp } from '../hooks/app_hooks'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  const { clickTheme, themes, clickProjeto, clickProjetoLink, clickProjetoHome } = useHooksApp()
  return (
    <>
      <Header themes={themes} onClickButtonTheme={clickTheme} onClickProjetos={clickProjetoLink} onClickHome={clickProjetoHome} />
      <Perfil themes={themes} />
      {clickProjeto ? (
        <>
          <motion.div initial='hidden' animate='visible' variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            }
          }}>
            <Projetos themes={themes} />
          </motion.div>
        </>
      ) : (
        <Bio themes={themes} />
      )}
      <Finally themes={themes} />
    </>
  )
}

export default Home
