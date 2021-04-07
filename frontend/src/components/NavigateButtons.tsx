import React from 'react'
import { ArrowLeftOutlined,EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button,Row,Col} from 'antd';
import styles from './Header.module.scss'
import 'antd/dist/antd.css';

export const NavigateButtons = () => {
    return (
        <div className={styles.NavigateButtons}>
            <Row className={styles.buttonWrapper}>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                    <Button block className={styles.backDashbordBtn} icon={<ArrowLeftOutlined />}>Back to Dashboard</Button>
                
                </Col>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                
                    <Button block className={styles.editAccountBtn} icon={<EditFilled />}>Edit Account</Button>
                </Col>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                    <Button block className={styles.deleteAccountBtn} icon={<DeleteFilled />} danger>Delete Account</Button>
                
                </Col>


            </Row>

        </div>
    )
}


