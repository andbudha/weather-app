import React from 'react';
import style from './AppInput.module.css';

export const AppInput = () => {
    return (
        <>
            <h2 className={style.mx_1}>Weather with Andrei</h2>
            <p className={style.mx_1}>Enter a city-name for weather information!</p>
            <input type="text" className={style.mx_1}/>

        </>
    );
};

