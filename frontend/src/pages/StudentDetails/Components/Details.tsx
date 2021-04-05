import React from 'react'
import styles from './Header.module.scss'
export const Details = () => {

    interface IStudentData{
        studentName: string;
        age: number;
        bloodGroup: string;
        city: string;
    }
    const data: IStudentData={
        studentName : "Dinesh",
        age: 22,
        bloodGroup: 'AB+',
        city: 'Unjha'
    }
    return (
        <div className={styles.details}>
             <div>
                 <h4>Student Name  :</h4>
                 <p>{data.studentName}</p>
             </div>
             <hr/>
             <div>
                 <h4>Student Age  :</h4>
                 <p>{data.age}</p>
             </div>
             <hr/>
             <div>
                 <h4>Student Blood group  :</h4>
                 <p>{data.bloodGroup}</p>
             </div>
             <hr/>
             <div>
                 <h4>Student City  :</h4>
                 <p>{data.city}</p>
             </div>
        </div>
    )
}
