import React from 'react';
import style from './AppContainer.module.css';
import {AppInput} from "../AppInput/AppInput";
import {AppButton} from "../AppButton/AppButton";

export const AppContainer = () => {
    return (
        <>
            <div className={style.container}>
                <AppInput/>
                <AppButton/>
            </div>
        </>
    );
};

