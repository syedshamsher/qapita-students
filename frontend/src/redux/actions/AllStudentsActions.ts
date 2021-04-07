import {Dispatch} from "redux";
import {FETCH_ALL_STUDENTS_FAILURE, FETCH_ALL_STUDENTS_LOADING, FETCH_ALL_STUDENTS_SUCCESS, StudentsDispatchTypes} from "../actionTypes/AllStudentsActionTypes";
import axios from "axios";

export const getAllStudentsData = () => async (dispatch: Dispatch<StudentsDispatchTypes>) => {
  try {
    dispatch({
      type: FETCH_ALL_STUDENTS_LOADING
    })

    const res = await axios.get(`http://localhost:8000/api/students`);

    dispatch({
      type: FETCH_ALL_STUDENTS_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: FETCH_ALL_STUDENTS_FAILURE
    })
  }
};