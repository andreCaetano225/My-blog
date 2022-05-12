/* eslint-disable @next/next/no-img-element */
import styles from './perfil.module.scss';

export interface PropsPerfil {
    themes: boolean;
}


export const Perfil = (props: PropsPerfil) => {
    return (
        <>
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
            </div>
        </>
    )
}