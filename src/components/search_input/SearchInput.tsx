import { ChangeEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from './SearchInput.module.scss'
import { getCityDetails, getWeatherDetails } from "../api/http_requests";

type SearchInputPropsType = {
    setCity: (cityName: string) => void
    setCountry: (countryName: string) => void
    getTemperature: (temperature: number) => void
    getDetails: (weatherDetails: string) => void
}
export const SearchInput = (props: SearchInputPropsType) => {


    //input value state
    const [inputValue, setInputValue] = useState('');
    //location key state
    const [cityKey, setCityKey] = useState('');

    //input-value catching function
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    //location searching function
    const searchHandler = () => {
        getCityDetails(inputValue)
            .then(response => {
                setCityKey(response.Key);
                //setting location names
                props.setCity(response.EnglishName);
                props.setCountry(response.Country.EnglishName);
            });

        getWeatherDetails(cityKey)
            .then(response => {
                console.log(response);
                props.getTemperature(response.Temperature.Metric.Value);
                props.getDetails(response.WeatherText);
                console.log(response.Temperature.Metric.Value);
                console.log(response.WeatherText);
            });

        setInputValue('');
    }
    return (
        <div className={styles.search_container}>
            <input
                value={inputValue}
                type="text"
                className={styles.input_field}
                onChange={valueCatchingHandler}
            />
            <div className={styles.search_btn} onClick={searchHandler}>
                < BiSearch className={styles.search_icon} />
            </div>
        </div>
    );
}