import React, { useState } from 'react';
import { Form, Input } from 'antd';
import styles from '../../pages/EditPage/EditPage.module.scss';

// interface EditformProps{
//   name:string,
//   age: number,
//   email: string,
// handleChange : ()=> void
// }
export const EditForm = ({handleChange,name,age, email}:any) => {
  const [form] = Form.useForm();
    
 
  return (
    <div className={styles.formWrapper}> 
      <Form
       
        form={form}
        layout="vertical"
      >
        
        <Form.Item className={styles.label} label="Student Name">
          <Input name="name" value={name} onChange={handleChange}/>
        </Form.Item>
        <Form.Item className={styles.label} label="Age">
          <Input name="age" value={age} onChange={handleChange}/>
        </Form.Item>
        <Form.Item className={styles.label} label="Email">
          <Input name="email" value={email} onChange={handleChange}/>
        </Form.Item>
      
      </Form>
    </div>
  );
};
