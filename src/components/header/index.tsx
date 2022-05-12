import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from './header.module.scss';

export interface PropsHeader {
    themes: boolean;
    onClickButtonTheme: () => void;
}

export const Header = (props: PropsHeader) => {
    return (
        <>
            <div className={props.themes ? styles.headerDivTrue : styles.headerDivFalse}>
                <div className={styles.divFlex}>
                    <div>
                        <p className={styles.pName}>{'</André Sousa>'}</p>
                        <p>Projetos</p>
                    </div>
                    <button className={styles.ButtonMoon} onClick={props.onClickButtonTheme}>
                        {props.themes ? <BsFillSunFill /> : <BsFillMoonFill />}
                    </button>
                </div>
            </div>
        </>
    );
}