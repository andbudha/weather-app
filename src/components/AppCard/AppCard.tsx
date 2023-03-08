import React from 'react';
import style from './AppCrad.module.css';

export const AppCard = () => {
    return (
        <>
            <div className={style.card}>
                <img src="https://via.placeholder.com/340x300" alt="day time img" className={style.time}/>
                <div className={style.icon}>
                    <img src="#" alt="icon img"/>
                </div>
                <div className={style.details}>
                    <h3>City Name</h3>
                    <h3>Country Name</h3>
                    <div>Weather Condition</div>
                    <div>
                        <span>tem</span>
                        <span>&deg;C</span>
                    </div>
                </div>

            </div>

        </>
    );
};
