import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Dashboard.module.scss';
import { Navbar } from '../../components/Navbar/Navbar';
import { SettingOutlined } from '@ant-design/icons';
import { Table } from '../../components/table/Table';
import 'antd/dist/antd.css';
import { RootStore } from '../../redux/Store';
import { getAllStudentsData } from '../../redux/actions/AllStudentsActions';

export const Dashboard : React.FC = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootStore) => state.addStudent);
    
        useEffect(() => {
            dispatch(getAllStudentsData())
        },[loading]);
        
    return (
        <div className={styles.dashboardWrapper}>
                <Navbar />
                <div className={styles.dashboardHeaderWrapper}>
                    <SettingOutlined style={{fontSize: '35px', color: '#F9CD5D'}} />
                    <h1>Dashboard</h1>
                </div>
                <div className={styles.dashboardBodyWrapper} >
                    <div className={styles.sideWidget}>

                    </div>
                    <div className={styles.tableWrapper}>
                        <Table />
                    </div>
                </div>
                <div className={styles.footer}>
                    <p>Copywrite @2021 Qapita Fintech India Pvt. Ltd.</p>
                </div>
        </div>
    )
}
