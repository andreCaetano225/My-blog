import styles from "./bio.module.scss"

export const Bio = () => {
    return (
        <>
            <div className={styles.divBioFalse}>
                <div className={styles.divWidth}>
                    <h2>Carreira</h2>
                    <br />
                    <br />
                    <h3>Front-end Developer</h3>
                    <a href="https://www.shareprime.com.br/" target="_blank" className={styles.link}>Shareprime · Tempo integral</a>
                    <p className={styles.timeCarr}>Ago de 2021 - presente · 10 mesesago de 2021 - o momento · 10 meses
                        Rio Grande do Sul, Brasil</p>
                    <p>Desenvolver novas soluções, documentá-las e integrá-las à intranets, desenvolver intranets para empresas à partir do Reactjs e SPFX, dar manutenção e melhorias à soluções já criadas e Desenvolver novos sites com Nextjs.</p>
                </div>
            </div>
        </>
    );
}