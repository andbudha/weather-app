import { ChangeEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from './SearchInput.module.scss'

export const SearchInput = () => {
    const [inputVavule, setInputValue] = useState('');

    //input-value catching function
    const valueCatchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    //location searching function
    const searchHandler = () => {
        console.log(inputVavule);
        setInputValue('');
    }
    return (
        <div className={styles.search_container}>
            <input
                value={inputVavule}
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