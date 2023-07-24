
import { BsCloudy } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import styles from './AppContainer.module.scss';

import { SearchInput } from "../search_input/SearchInput";
import { useState } from "react";



export const AppContainer = () => {
    //location and weather detail states
    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');

    const setCity = (cityName: string) => {
        setCityName(cityName);
        console.log(cityName);
    }

    const setCountry = (countryName: string) => {
        setCountryName(countryName);
        console.log(countryName);
    }

    return (
        <>
            <div className={styles.main_container}></div>
            <div className={styles.app_container}>
                <SearchInput setCity={setCity} setCountry={setCountry} />
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
                        <p className={styles.name}>{`${cityName}`}</p>
                    </div>
                </div>
                <div className={styles.country}>
                    <p className={styles.name}>{countryName}</p>
                </div>
            </div>
        </>
    );
};

