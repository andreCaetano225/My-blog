import { Acad } from "../acad";
import styles from "./bio.module.scss"

export interface BioProps {
    themes: boolean
}

export const Bio = (props: BioProps) => {
    return (
        <>
            <div className={props.themes ? styles.divBioTrue : styles.divBioFalse}>
                <div className={styles.divWidth}>
                    <h2>Carreira</h2>
                    <br />
                    <h3>Front-end Developer</h3>
                    <a href="https://www.shareprime.com.br/" target="_blank" className={styles.link} rel="noreferrer">Shareprime · Tempo integral</a>
                    <p className={styles.timeCarr}>Ago de 2021 - presente · 10 meses Rio Grande do Sul, Brasil</p>
                    <p className={styles.pTextCarr}>Desenvolver novas soluções, documentá-las e integrá-las à intranets, desenvolver intranets para empresas à partir do Reactjs e SPFX, dar manutenção e melhorias à soluções já criadas e Desenvolver novos sites com Nextjs.</p>
                </div>
                <div style={{ marginTop: '120px' }}>
                    <Acad h2={'Formação acadêmica'} h3={'Rocketseat'} link={'https://www.rocketseat.com.br/'} p1={'Ignite | ReactJS | React Native'} p2={'O Ignite é um programa de aceleração para devs, focado em preparar profissionais completos(as) para o mercado, treinando skills técnicas e comportamentais de forma intensiva e prática.'} />
                    <Acad h3={'UNIJUAZEIRO'} p1={'Bacharelado em sistemas de irformação'} link={'https://unijuazeiro.edu.br/'} />
                </div>
            </div>
        </>
    );
}