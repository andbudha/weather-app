import { KeyboardEvent, ChangeEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from './SearchInput.module.scss'
import { getCityDetails, getWeatherDetails } from "../api/http_requests";

type SearchInputPropsType = {
    setCity: (cityName: string) => void
    setCountry: (countryName: string) => void
    getTemperature: (temperature: number) => void
    getDetails: (weatherDetails: string) => void
    getIcon: (iconNumber: number) => void
    displayCard: (newCardStatus: boolean) => void
    activateLoder: (newStatus: boolean) => void
    activateError: (newErrorStatus: boolean) => void
}
export const SearchInput = (props: SearchInputPropsType) => {

    //input value state
    const [inputValue, setInputValue] = useState('');

    //input-value catching function
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const getWeather = () => {
        props.activateLoder(true);
        getCityDetails(inputValue)
            .then(response => {
                if (response.EnglishName) {
                    // setting weather details
                    getWeatherDetails(response.Key)
                        .then(response => {
                            props.activateLoder(false);
                            props.getTemperature(response.Temperature.Metric.Value);
                            props.getDetails(response.WeatherText);
                            props.getIcon(response.WeatherIcon);
                            props.displayCard(true);
                        });
                    //setting location names
                    props.setCity(response.EnglishName);
                    props.setCountry(response.Country.EnglishName);

                } else {
                    props.activateLoder(false);
                    props.activateError(true);
                    setTimeout(() => {
                        props.activateError(false);
                    }, 3500);
                }
            })
            .catch(err => {
                props.activateLoder(false);
                props.displayCard(false);
                props.activateError(true);
                setTimeout(() => {
                    props.activateError(false);
                }, 4500);
            })
    }

    // on click get weather details
    const onClickHandler = () => {
        getWeather();
        setInputValue('');
    }

    //on keydown get weather details
    const onEnterkHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getWeather();
            setInputValue('');
        }
    }
    return (
        <div className={styles.search_container}>
            <input
                value={inputValue}
                type="text"
                className={styles.input_field}
                onChange={valueCatchingHandler}
                onKeyDown={onEnterkHandler}
                placeholder="Enter desired location..."
            />
            <div className={styles.search_btn} onClick={onClickHandler}>
                < BiSearch className={styles.search_icon} />
            </div>
        </div>
    );
}