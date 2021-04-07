import {Dispatch} from "redux";
import {ADD_STUDENT_FAILURE, ADD_STUDENT_LOADING, ADD_STUDENT_SUCCESS, AddStudentDispatchTypes} from "../actionTypes/AddStudentActionTypes";
import axios from "axios";

export const addStudent = ( studentData: any ) => async (dispatch: Dispatch<AddStudentDispatchTypes>) => {
  try {
    dispatch({
      type: ADD_STUDENT_LOADING
    })

    const res = await axios.post(`http://localhost:8000/api/add`,{
          name: studentData.name,
          age: studentData.age,
          email: studentData.email,
    });

    dispatch({
      type: ADD_STUDENT_SUCCESS,
      payload: res
    })

  } catch(e) {
    dispatch({
      type: ADD_STUDENT_FAILURE
    })
  }
};