import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditForm } from '../../components/EditForm'
import {Header} from '../../components/Header'
import {NavigateButtons} from '../../components/NavigateButtons'
import { getStudentData } from '../../redux/EditDetail/action'
import styles from './EditPage.module.scss'


export const EditPage: React.FC = () => {
    const [state, setState] = useState({
        
    })
    const dispatch = useDispatch();
    let data = useSelector((state: any) => state.edit.data)
    console.log(data);
    
    useEffect(()=>{
        dispatch(getStudentData(1))
    },[])
    return (
        <div>
            <Header headerTitle={'Edit Page'}/>
            <NavigateButtons editBtnContent={'Save Change'}/>
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <h1>Edit Details</h1>
                </div>
                <hr/>
                <EditForm {...data}/>

            </div>
        </div>
    )
}
