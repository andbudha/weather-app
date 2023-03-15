import React from 'react';
import style from './AppCrad.module.css';
import dayTime from './img/day.svg';
import icon from './img/icons/1.svg';



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
                <img src={dayTime} alt="day time img" className={style.time}/>
                <div className={style.icon}>
                    <img src={icon} alt="icon img" className={style.icon_image}/>
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
