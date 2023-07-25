import lightning from '../../imgs/icons/15.svg';
import styles from './Error.module.scss';



export const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.lightning}>
                <img src={lightning} alt="lightning img" />
            </div>
            <p>Unexpected error.</p>
            <p>Try again, please.</p>
        </div>
    );
}