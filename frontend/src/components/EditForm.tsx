import React, { useState } from 'react';
import { Form, Input } from 'antd';
import styles from '../pages/EditPage/EditPage.module.scss';
import {Idata} from '../redux/EditDetail/actionTypes'

export const EditForm: React.FC<Idata> = ({name, username,email,website,id,address,phone,company}:Idata) => {
  const [form] = Form.useForm();
    console.log(name,username,email);
    
 
  return (
    <div className={styles.formWrapper}> 
      <Form
       
        form={form}
        layout="vertical"
      >
        
        <Form.Item className={styles.label} label="Student Name">
          <Input value={name} />
        </Form.Item>
        <Form.Item className={styles.label} label="User name">
          <Input value={username} />
        </Form.Item>
        <Form.Item className={styles.label} label="Email">
          <Input value={email} />
        </Form.Item>
        <Form.Item className={styles.label} label="Website URL">
          <Input value={website} />
        </Form.Item>
        <Form.Item className={styles.label} label="Phone No">
          <Input value={[phone]} />
        </Form.Item>
      </Form>
    </div>
  );
};
