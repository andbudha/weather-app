
import styles from './AppContainer.module.scss';
import weatherIcon from '../../imgs/icons/6.svg';
import { SearchInput } from "../search_input/SearchInput";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";



export const AppContainer = () => {
    //location and weather detail states
    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [temperature, setTemperature] = useState<null | number>(null);
    const [weatherDetails, setWeatherDetails] = useState('');
    const [icon, setIcon] = useState<null | number>(null);

    const setCity = (cityName: string) => {
        setCityName(cityName);
        console.log(cityName);
    }

    const setCountry = (countryName: string) => {
        setCountryName(countryName);
        console.log(countryName);
    }

    const getTemperature = (temperature: number) => {
        const degrees = Math.round(temperature);
        setTemperature(degrees)
    }

    const getDetails = (weatherDetails: string) => {
        setWeatherDetails(weatherDetails)
    }

    const getIcon = (iconNumber: number) => {
        setIcon(iconNumber)
    }
    return (
        <>
            <div className={styles.main_container}></div>
            <div className={styles.app_container}>
                <SearchInput
                    setCity={setCity}
                    setCountry={setCountry}
                    getTemperature={getTemperature}
                    getDetails={getDetails}
                    getIcon={getIcon}
                />
                <div className={styles.temperature}>
                    <p className={styles.degrees}>{temperature}</p>
                    <p className={styles.symbol}>&#8451;</p>
                </div>
                <div className={styles.weather}>
                    <div className={styles.weather_icon}>
                        <img src={weatherIcon} alt="" className={styles.icon} />
                    </div>
                    <div className={styles.weather_details}>
                        <p className={styles.details}>{weatherDetails}</p>
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

