import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from './header.module.scss';
import { motion } from 'framer-motion';

export interface PropsHeader {
    themes: boolean;
    onClickButtonTheme: () => void;
    onClickProjetos: () => void;
    onClickHome: () => void;
}

export const Header = (props: PropsHeader) => {
    return (
        <>

            <div className={props.themes ? styles.headerDivTrue : styles.headerDivFalse}>
                <div className={styles.divFlex}>
                    <div>
                        <p className={styles.pName} onClick={props.onClickHome}>{'</André Sousa>'}</p>
                        <p className={styles.pProjeto} onClick={props.onClickProjetos}>Projetos</p>
                    </div>
                    <button className={styles.ButtonMoon} onClick={props.onClickButtonTheme}>
                        {props.themes ? <BsFillSunFill /> : <BsFillMoonFill />}
                    </button>
                </div>
            </div>

        </>
    );
}