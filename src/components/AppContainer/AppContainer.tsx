import React, {useState} from 'react';
import style from './AppContainer.module.css';
import {AppInput} from "../AppInput/AppInput";
import {AppButton} from "../AppButton/AppButton";
import {AppCard} from "../AppCard/AppCard";
import {getCity, getWeather} from "../GetCityDetails";



export const AppContainer = () => {
    //city key&name states
    const[cityKey, setCityKey]=useState('');
    const[cityName, setCityName]=useState('');
    const[countryName, setCountryName]=useState('');

    //input-value getting func
    const getValue = (inputValue: string) => {
        getCity(inputValue).then(data=>{
            console.log(data)
            setCityKey(data.Key);
            setCityName(data.EnglishName);
            setCountryName(data.Country.EnglishName);
        }).catch(err=>err);

        getWeather(cityKey).then(data=>{
            console.log(data);
        }).catch(err=>err);

    }

    return (
        <>
            <div className={style.container}>
                <AppInput getValue={getValue}/>
                <AppButton/>
                <AppCard cityName={cityName} countryName={countryName}/>
            </div>
        </>
    );
};

