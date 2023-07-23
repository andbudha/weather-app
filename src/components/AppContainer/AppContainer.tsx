import { BiSearch } from "react-icons/bi";
import styles from './AppContainer.module.scss';
import { ChangeEvent, useState } from "react";



export const AppContainer = () => {

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
        <>
            <div className={styles.main_container}></div>
            <div className={styles.app_container}>
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
            </div>
        </>
    );
};

