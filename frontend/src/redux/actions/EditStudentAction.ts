import {Dispatch} from "redux";
import {EDIT_STUDENT_LOADING,EDIT_STUDENT_SUCCESS,EDIT_STUDENT_FAILURE, EditStudentDispatchTypes} from "../actionTypes/EditStudentActionTypes";
import axios from "axios";

export const editStudent = ( studentData: any ) => async (dispatch: Dispatch<EditStudentDispatchTypes>) => {
  try {
    dispatch({
      type: EDIT_STUDENT_LOADING
    })

    const res = await axios.patch(`http://localhost:8000/api/update`,{
          name: studentData.name,
          age: studentData.age,
          email: studentData.email,
    });

    dispatch({
      type: EDIT_STUDENT_SUCCESS,
      payload: res
    })

  } catch(e) {
    dispatch({
      type: EDIT_STUDENT_FAILURE
    })
  }
};