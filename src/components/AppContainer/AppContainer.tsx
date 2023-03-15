import React, {useState} from 'react';
import style from './AppContainer.module.css';
import {AppInput} from "../AppInput/AppInput";
import {AppButton} from "../AppButton/AppButton";
import {AppCard} from "../AppCard/AppCard";
import {getCity, getWeather} from "../GetCityDetails";



export const AppContainer = () => {
    //city key&name states
    const[cityName, setCityName]=useState('');
    const[countryName, setCountryName]=useState('');
    const[weatherText, setWeatherText]=useState('');
    const[temp, setTemp]=useState('');

    //input-value getting func
    const getValue = async (inputValue: string) => {
        const cityDetails = await getCity(inputValue);
        const weatherDetails = await getWeather(cityDetails.Key);
        setCityName(cityDetails.EnglishName);
        setCountryName(cityDetails.Country.EnglishName);
        setWeatherText(weatherDetails.WeatherText);
        setTemp(weatherDetails.Temperature.Metric.Value);
    }

    return (
        <>
            <div className={style.container}>
                <AppInput getValue={getValue}/>
                <AppButton/>
                <AppCard
                    cityName={cityName}
                    countryName={countryName}
                    weatherText={weatherText}
                    temp={temp}
                />
            </div>
        </>
    );
};

