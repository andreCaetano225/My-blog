import styles from './finally.module.scss';


export interface PropsFinally {
    themes: boolean;
}


export const Finally = (props: PropsFinally) => {
    return (
        <>
            <div className={props.themes ? styles.divFinallyTrue : styles.divFinallyFalse}>
                <div className={styles.div}>
                    <p>© 2020. construído com cuidado por André Sousa</p>
                </div>
            </div>
        </>
    )
}