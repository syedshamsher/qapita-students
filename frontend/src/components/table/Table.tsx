import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Table.scss";
import { RootStore } from "../../redux/Store";
import { DoubleLeftOutlined } from "@ant-design/icons";
import "antd/dist/antd.css"
import { getAllStudentsData } from "../../redux/actions/AllStudentsActions";
import { useHistory } from "react-router";

export const Table = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { allStudents, loading } = useSelector((state: RootStore) => state.allStudents);
  
  useEffect(() => {
    loading && dispatch(getAllStudentsData())
  },[]);

  return (
    <div className="col-md-9 order-2">
      <div className="card">
        <div className="card-header">
          <h4>Profiles</h4>
        </div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allStudents?.reverse().map((student: RootStore, index: number) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>
                  <a className="btn btn-secondary" onClick={() => history.push(`/edit/${student._id}`,student._id)}>
                    <DoubleLeftOutlined /> Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
