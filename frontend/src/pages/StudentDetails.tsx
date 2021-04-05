import React from 'react'
import { Header } from '../components/Header'
import { NavigateButtons } from '../components/NavigateButtons'
import { Details } from '../components/Details';
import {Avatar} from '../components/Avatar';
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
