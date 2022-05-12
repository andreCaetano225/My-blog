import styles from '../bio/bio.module.scss';

export interface PropsAcad {
    h2?: string;
    h3: string;
    p1: string;
    p2?: string;
    link: string;
}

export const Acad = (props: PropsAcad) => {
    return (
        <>
            <div className={styles.divWidth}>
                <h2>{props.h2}</h2>
                <br />
                <a href={`${props.link}`} target="_blank" rel="noreferrer">
                    <h3 className={styles.linkh3}>{props.h3}</h3>
                </a>
                <p className={styles.pTextAcad}>{props.p1}</p>
                <p className={styles.pTextCarr}>{props.p2}</p>
            </div>
        </>
    )
}