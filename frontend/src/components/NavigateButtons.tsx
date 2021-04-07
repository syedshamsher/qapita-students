import React from 'react'
import { ArrowLeftOutlined,EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button,Row,Col} from 'antd';
import styles from './Header.module.scss'
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';

export const NavigateButtons = ({editBtnContent}:{editBtnContent:string}) => {
    const history = useHistory();

    const backToDashboard = () =>{
        history.push('/dashboard')
    }
    return (
        <div className={styles.NavigateButtons}>
            <Row className={styles.buttonWrapper}>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                    <Button block className={styles.backDashbordBtn} icon={<ArrowLeftOutlined />} onClick={backToDashboard}>Back to Dashboard</Button>
                
                </Col>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                
                    <Button block className={styles.editAccountBtn} icon={<EditFilled />}>{editBtnContent}</Button>
                </Col>
               <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                    <Button block className={styles.deleteAccountBtn} icon={<DeleteFilled />} danger>Delete Account</Button>
                
                </Col>


            </Row>

        </div>
    )
}


