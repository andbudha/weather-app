import React from 'react';
import style from './AppCrad.module.css';



type AppCardPropsType = {
    cityName: string
    countryName: string
    weatherText: string
    temp: string
}
export const AppCard = (props: AppCardPropsType) => {




    return (
        <>
            <div className={style.card}>
                <img src="https://via.placeholder.com/340x300" alt="day time img" className={style.time}/>
                <div className={style.icon}>
                    <img src="#" alt="icon img"/>
                </div>
                <div className={style.details}>
                    <h3>{props.cityName}</h3>
                    <h3>{props.countryName}</h3>
                    <div>{props.weatherText}</div>
                    <div>
                        <span>{props.temp}</span>
                        <span>&deg;C</span>
                    </div>
                </div>

            </div>

        </>
    );
};
