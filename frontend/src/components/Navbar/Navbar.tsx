import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import {useDispatch} from "react-redux";
import { addStudent } from "../../redux/actions/AddStudentAction";
import { getAllStudentsData } from "../../redux/actions/AllStudentsActions";

export const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    let studentData = {
        name: name,
        age: Number(age),
        email: email
    }

    dispatch(addStudent( studentData ))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getAllStudentsData())
  },[isModalVisible])

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarDashboard}>
        <HomeOutlined style={{ color: "#FBFBFB" }} />
        <NavLink className={styles.dashboardLInk} to="/">
          QapProfile
        </NavLink>
      </div>
      <NavLink className={styles.collegeLInk} to="/">
        Colleges
      </NavLink>
      <div className={styles.navbarUser}>
        <UserOutlined style={{ color: "#FBFBFB" }} />
        <div className={styles.userLink} onClick={showModal}>
          Add Student
        </div>
      </div>
      <div className={styles.navbarLogout}>
        <LogoutOutlined style={{ color: "#FBFBFB" }} />
        <div className={styles.logout}>Logout</div>
      </div>
      <Modal
        title="Add New Student"
        visible={isModalVisible}
        okText="Add"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form
          className={styles.margin}
          method="post"
          encType="multipart/form-data"
        >
          <div className={styles.margin}>

            <Input
              name="name"
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.margin}>
            <Input
              name="age"
              value={age}
              type="age"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className={styles.margin}>
            <Input
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
