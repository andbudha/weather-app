
import { BsCloudy } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import styles from './AppContainer.module.scss';

import { SearchInput } from "../search_input/SearchInput";



export const AppContainer = () => {


    return (
        <>
            <div className={styles.main_container}></div>
            <div className={styles.app_container}>
                <SearchInput />
                <div className={styles.temperature}>
                    <p className={styles.degrees}>35</p>
                    <p className={styles.symbol}>&#8451;</p>
                </div>
                <div className={styles.weather}>
                    <div className={styles.weather_icon}>
                        <BsCloudy className={styles.icon} />
                    </div>
                    <div className={styles.weather_details}>
                        <p className={styles.details}>cloudy</p>
                    </div>
                </div>
                <div className={styles.city}>
                    <div className={styles.location_icon}>
                        <CiLocationOn className={styles.icon} />
                    </div>

                    <div className={styles.location_name}>
                        <p className={styles.name}>Chisinau,</p>
                    </div>
                </div>
                <div className={styles.country}>
                    <p className={styles.name}>Moldova</p>
                </div>
            </div>
        </>
    );
};

