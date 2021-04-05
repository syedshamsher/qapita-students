import React from 'react'
import { Header } from './StudentDetails/Components/Header'
import { NavigateButtons } from './StudentDetails/Components/NavigateButtons'
import { Details } from './StudentDetails/Components/Details';
import {Avatar} from './StudentDetails/Components/Avatar';
import styles from './StudentDetails.module.scss'
export const StudentDetails = () => {
    return (
        <div>
            <Header/>
            <NavigateButtons/>
           <div className={styles.container}>
                <div className={styles.details}>
                    <Details/>
                </div>
                <div>
                    <Avatar/>
                </div>
           </div>
        </div>
    )
}
