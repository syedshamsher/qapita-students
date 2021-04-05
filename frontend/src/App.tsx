import React from 'react';
import styles from './App.module.scss';
import { Routes } from './routes/Routes';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Routes/>
        </div>
    )
}
