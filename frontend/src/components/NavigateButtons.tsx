import React from 'react'
import { ArrowLeftOutlined,EditFilled, DeleteFilled } from '@ant-design/icons';
import { Button} from 'antd';
import styles from './Header.module.scss'

export const NavigateButtons = () => {
    return (
        <div className={styles.NavigateButtons}>
            <div>
            <Button block className={styles.backDashbordBtn} icon={<ArrowLeftOutlined />}>Back to Dashboard</Button>
            <Button block className={styles.editAccountBtn} icon={<EditFilled />}>Edit Account</Button>
            <Button block className={styles.deleteAccountBtn} icon={<DeleteFilled />} danger>Delete Account</Button>

            </div>

        </div>
    )
}


