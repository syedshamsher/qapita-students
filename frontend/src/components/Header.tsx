import React from 'react'
import UserOutlined from '@ant-design/icons/UserOutlined';
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <UserOutlined />
                <h1>Student Details</h1>
            </div>
        </div>
    )
}
