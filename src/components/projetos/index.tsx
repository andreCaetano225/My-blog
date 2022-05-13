import styles from './projetos.module.scss';


export interface ProjetosProps {
    themes: boolean;
}

export const Projetos = (props: ProjetosProps) => {
    return (
        <>
            <div className={props.themes ? styles.divProjetosTrue : styles.divProjetosFalse}>
                <p>Em breve irei colocar todos os projetos ✌ ✌</p>
            </div>
        </>
    )
}