/* eslint-disable @next/next/no-img-element */
import styles from './perfil.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion';

export interface PropsPerfil {
    themes: boolean;
}


export const Perfil = (props: PropsPerfil) => {
    return (
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
                <div className={props.themes ? styles.divPerfilTrue : styles.divPerfilFalse}>
                    <div className={styles.divItems}>
                        <div className={styles.divFlex}>
                            <div>
                                <h2>André Caetano de Sousa</h2>
                                <p>Desenvolvedor Front-End {'(ReactJS / TypeScript)'}</p>
                            </div>
                            <img src="./Perfil.jpeg" alt="Minha foto" />
                        </div>
                        <p className={styles.pText}>André é um desenvolvedor <strong>Front-End</strong>, atualmente trabalhando com <strong>ReactJS</strong> e estudando <strong>NodeJS</strong> para se tornar um desenvolvedor completo.
                            Sou um entusiasta da Tecnologia que busco explorar a capacidade de facilitar de forma eficaz e eficiente para os diversos problemas da sociedade.
                        </p>
                    </div>
                    <div className={styles.linkLinkedin}>
                        <a href="https://www.linkedin.com/in/andre-sousa-dev/" target='_blank' rel="noreferrer">
                            <p>
                                LinkedIn
                            </p>
                            <span>
                                <AiOutlineArrowRight />
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}