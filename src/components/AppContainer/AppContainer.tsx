import React from 'react';
import style from './AppContainer.module.css';
import {AppInput} from "../AppInput/AppInput";
import {AppButton} from "../AppButton/AppButton";


type AppContainerType = {
    getCityKey:(cityName: string)=> void
}
export const AppContainer = (props: AppContainerType) => {
    return (
        <>
            <div className={style.container}>
                <AppInput getCityKey={props.getCityKey}/>
                <AppButton/>
            </div>
        </>
    );
};

