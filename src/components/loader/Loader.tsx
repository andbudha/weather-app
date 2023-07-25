import loader from '../../imgs/icons/1.svg';
import styles from './Loader.module.scss';


export const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sun_spinner}>
                <img src={loader} alt="spinning sun-icon" />
            </div>
            <div >
                <span className={styles.loader}>Loading</span>
            </div>
        </div>
    );
}