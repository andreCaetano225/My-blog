import { BsDownload } from 'react-icons/bs'
import { Acad } from "../acad";
import styles from "./bio.module.scss"
import { motion } from 'framer-motion';

export interface BioProps {
    themes: boolean
}

export const Bio = (props: BioProps) => {
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
                        delay: .9
                    }
                }
            }}>
                <div className={props.themes ? styles.divBioTrue : styles.divBioFalse}>
                    <div className={styles.divWidth}>
                        <h2>Carreira</h2>
                        <br />
                        <h3>Front-end Developer</h3>
                        <a href="https://musicpro.live/" target="_blank" className={styles.link} rel="noreferrer">MusicPRO · Tempo integral</a>
                        <p className={styles.timeCarr}>Jun de 2022 - presente · Brasil</p>
                        <p className={styles.pTextCarr}>Desenvolvimentos de sites com Reactjs | Nextjs | Tailwind CSS
                            Desenvolvimentos de aplicativos mobile com React Native.</p>
                    </div>
                    <div className={styles.divWidth2}>
                        <h3>Front-end Developer</h3>
                        <a href="https://www.shareprime.com.br/" target="_blank" className={styles.link} rel="noreferrer">Shareprime · Tempo integral</a>
                        <p className={styles.timeCarr}>Ago de 2021 - Jun de 2022 · Brasil</p>
                        <p className={styles.pTextCarr}>Desenvolver novas soluções, documentá-las e integrá-las à intranets, desenvolver intranets para empresas à partir do Reactjs e SPFX, dar manutenção e melhorias à soluções já criadas e Desenvolver novos sites com Nextjs.</p>
                    </div>
                    <div style={{ marginTop: '120px' }}>
                        <Acad h2={'Formação acadêmica'} h3={'Rocketseat'} link={'https://www.rocketseat.com.br/'} p1={'Ignite | ReactJS | React Native'} p2={'O Ignite é um programa de aceleração para devs, focado em preparar profissionais completos(as) para o mercado, treinando skills técnicas e comportamentais de forma intensiva e prática.'} />
                        <Acad h3={'UNIJUAZEIRO'} p1={'Bacharelado em sistemas de irformação'} link={'https://unijuazeiro.edu.br/'} />
                    </div>
                    <div className={styles.linkLinkedin}>
                        <a href="./Cv-AndreSousa.pdf" download rel="noreferrer">
                            <p>
                                Download CV
                            </p>
                            <span>
                                <BsDownload />
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>

        </>
    );
}