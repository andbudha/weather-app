import loader from '../../imgs/icons/1.svg';
import styles from './Loader.module.scss';


export const Loader = () => {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.loader}></span>
            </div>
            <div >
                <span className={styles.loader2}>Loading</span>
            </div>
        </div>
    );
}