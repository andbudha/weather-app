import { ChangeEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from './SearchInput.module.scss'
import { getCityDetails } from "../api/http_requests";

type SearchInputPropsType = {
    setCity: (cityName: string) => void
    setCountry: (countryName: string) => void
}
export const SearchInput = (props: SearchInputPropsType) => {


    //input value state
    const [inputValue, setInputValue] = useState('');

    //input-value catching function
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    //location searching function
    const searchHandler = () => {
        getCityDetails(inputValue)
            .then(response => {
                props.setCity(response.EnglishName);
                props.setCountry(response.Country.EnglishName);
            });

        setInputValue('');
    }
    return (
        <div className={styles.search_container}>
            <input
                value={inputValue}
                type="text"
                className={styles.input_field}
                onChange={valueCatchingHandler}
            />
            <div className={styles.search_btn} onClick={searchHandler}>
                < BiSearch className={styles.search_icon} />
            </div>
        </div>
    );
}