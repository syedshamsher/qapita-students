import React from 'react'
import { Header } from '../../components/Header'
import { NavigateButtons } from '../../components/NavigateButtons'
import { Details } from '../../components/Details';
import {Avatar} from '../../components/Avatar';
import styles from './StudentDetails.module.scss'
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

export const StudentDetails: React.FC = () => {
    return (
        <div>
            <Header headerTitle={'Student Details'}/>
            <NavigateButtons editBtnContent={'Edit Account'}/>
           <Row className={styles.container}>
                <Col xs={24} sm={24} md={24} lg={24} xl={18} className={styles.details}>
                    <Details/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                    <Avatar/>
                </Col>
           </Row>
        </div>
    )
}
