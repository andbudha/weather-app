import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import style from './AppInput.module.css';

type AppInputType = {
    getCityKey:(cityName: string)=>void
}
export const AppInput = (props: AppInputType) => {



    //input state
    const[inputValue, setInputValue] = useState('');

    //input value catching func
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    //on enter sending input value
    const onEnterCatchingHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setInputValue(event.currentTarget.value);
            setInputValue('');
            props.getCityKey(inputValue);
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

