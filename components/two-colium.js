import styles from 'styles/two-colimn.module.css'

export function TwoColumn({ children }) {
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}


TwoColumn.Main = function Main({ children }) {
    return (
        <div className={styles.main}>
            {styles.main}
        </div>
    )
}


TwoColumn.sideber = function Sideber({ children }) {
    return (
        <div className={styles.sideber}>
            {children}
        </div>
    )
}