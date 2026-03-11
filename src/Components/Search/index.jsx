import React, {useCallback, useContext, useState} from 'react';

import styles from './Search.module.scss'
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce'

const Search = () => {
    const [value, setValue] = useState('')

    const updateSearchValue = useCallback(
        debounce(str => {
            setSearchValue(str)
        }, 1000),
        []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const {searchValue, setSearchValue} = useContext(SearchContext)
    return (
        <input value={value} onChange={(event) => {onChangeInput(event)}} className={styles.search} placeholder={'Найти пиццу...'} />
    );
};

export default Search;