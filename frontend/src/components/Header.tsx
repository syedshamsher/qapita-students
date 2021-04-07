import React from 'react'
import UserOutlined from '@ant-design/icons/UserOutlined';
import styles from './Header.module.scss'

export const Header = ({headerTitle}:{headerTitle:string}) => {
    return (
        <div className={styles.header}>
            <div>
                <UserOutlined />
                <h1>{headerTitle}</h1>
            </div>
        </div>
    )
}
