import React from 'react';
import style from './AppContainer.module.css';
import {AppInput} from "../AppInput/AppInput";

export const AppContainer = () => {
    return (
        <div className={style.container}>
           <AppInput/>
        </div>
    );
};

