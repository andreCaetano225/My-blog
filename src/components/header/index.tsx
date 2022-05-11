import { BsFillMoonFill } from 'react-icons/bs';
import styles from './header.module.scss';


export const Header = () => {
    return (
        <>
            <div className={styles.headerDivFalse}>
                <div className={styles.divFlex}>
                    <div>
                        <p className={styles.pName}>{'</André Sousa>'}</p>
                        <p>Projetos</p>
                    </div>
                    <button className={styles.ButtonMoon}>
                        <BsFillMoonFill />
                    </button>
                </div>
            </div>
        </>
    );
}