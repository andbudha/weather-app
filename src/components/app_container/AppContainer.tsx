
import styles from './AppContainer.module.scss';
import { SearchInput } from "../search_input/SearchInput";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Icon } from '../icon/Icon';
import { Loader } from '../loader/Loader';
import { Error } from '../error/Error';

export const AppContainer = () => {
    //location and weather detail states
    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [temperature, setTemperature] = useState<null | number>(null);
    const [weatherDetails, setWeatherDetails] = useState('');
    const [iconID, setIconID] = useState<null | number>(null);
    //weather detail container state
    const [activeCard, setActiveCard] = useState(false);
    //loader state
    const [loader, setLoader] = useState(false);
    //error component state
    const [error, setError] = useState(false);

    const displayCard = (newCardStatus: boolean) => {
        setActiveCard(newCardStatus);
    }

    const setCity = (cityName: string) => {
        setCityName(cityName);
    }

    const setCountry = (countryName: string) => {
        setCountryName(countryName);
    }

    const getTemperature = (temperature: number) => {
        const degrees = Math.round(temperature);
        setTemperature(degrees)
    }

    const getDetails = (weatherDetails: string) => {
        setWeatherDetails(weatherDetails)
    }

    const getIcon = (iconNumber: number) => {
        setIconID(iconNumber)
    }

    //loader activating func
    const activateLoder = (newStatus: boolean) => {
        setLoader(newStatus)
    }

    //error activating func
    const activateError = (newErrorStatus: boolean) => {
        setError(newErrorStatus);
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
                    displayCard={displayCard}
                    activateLoder={activateLoder}
                    activateError={activateError}
                />
                <div className={styles.weather_card}>
                    {loader && <div className={styles.active_loader}><Loader /></div>}
                    {error && <div className={styles.active_error}><Error /></div>}
                    {activeCard && !loader &&
                        <div className={styles.card}>
                            <div className={styles.temperature}>
                                <p className={styles.degrees}>{temperature}</p>
                                <p className={styles.symbol}>&#8451;</p>
                            </div>
                            <div className={styles.weather}>
                                <div className={styles.weather_icon}>
                                    <div className={styles.icon}>
                                        <Icon iconID={iconID} />
                                    </div>
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
                    }
                </div>
            </div>
        </>
    );
};

