import styles from './Error.module.scss';

export const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cloud}>
                <span className={styles.loader}></span>
            </div>
            <p>Unexpected error.</p>
            <p>Try again, please.</p>
        </div>
    );
}