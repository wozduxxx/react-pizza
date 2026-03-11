import React from 'react';

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <h1 className={styles.root}>
            <span>😢</span>
            <br/>
            Ничего не найдено!
            <p className={styles.description}>Такой страницы не существует</p>
        </h1>

    );
};

export default NotFoundBlock;