import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditForm } from '../../components/EditDetails/EditForm'
import {Header} from '../../components/Header'
import {NavigateButtons} from '../../components/NavigateButtons'
import styles from './EditPage.module.scss'
import {getAllStudentsData} from '../../redux/actions/AllStudentsActions'
import { RootStore } from "../../redux/Store";
import { useHistory } from 'react-router'
import { editStudent } from '../../redux/actions/EditStudentAction'


export const EditPage: React.FC = () => {
    const history = useHistory()
    console.log(history);
    
    const [state, setState] = useState<object>({})
    const dispatch = useDispatch();
    const { allStudents, loading } = useSelector((state: RootStore) => state.allStudents);
    
    useEffect(()=>{
        dispatch(getAllStudentsData())
        const studentData = allStudents.length> 0 && allStudents.find((student:any) => student._id === history.location.state)
        studentData.name && setState(studentData)
    },[])

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const {value, name} = e.target;
        setState((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }
    const handleEditStudent = () =>{
        let studentData = {
           ...state
        }
    
        dispatch(editStudent( studentData ))
    }
    return (
        <div>
            <Header headerTitle={'Edit Page'}/>
            <NavigateButtons editBtnContent={'Save Change'} />
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <h1>Edit Details</h1>
                </div>
                <hr/>
                <EditForm {...state} handleChange={handleChange}/>

            </div>
        </div>
    )
}
