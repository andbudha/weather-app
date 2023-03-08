import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import style from './AppInput.module.css';


export const AppInput = () => {
    //input state
    const[inputValue, setInputValue] = useState('');

    //api key
    const key = 'jC35CfzUAWtBEfPALcB1XCffxaxiT8yz';

    //getting city info
    const getCity = async (city:string) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`
        const response = await fetch(base+query);
        const data = await response.json();
        return data[0];
    }

    //getting weather info
    const getWeather = async (cityKey: string) => {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${cityKey}?apikey=${key}`
        const response = await fetch(base+query);
        const data = await response.json();
        return data[0];
    }

    const updateCity = async (city: string) => {
      const cityDetails = await getCity(city);
      const weatherDetails = await getWeather(cityDetails.Key);
        console.log(cityDetails, weatherDetails);
      return {cityDetails, weatherDetails}
    }


    //input value catching func
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    //on enter sending input value
    const onEnterCatchingHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setInputValue(event.currentTarget.value);
            setInputValue('');
            updateCity(inputValue).then(data=>data);
        }

    }
    return (
        <>
            <h2 className={style.mx_1}>Weather with Andrei</h2>
            <p className={style.mx_1}>Enter a city-name for weather information!</p>
            <input
                className={style.mx_1}
                value={inputValue}
                onChange={valueCatchingHandler}
                onKeyDown={onEnterCatchingHandler}
            />

        </>
    );
};

