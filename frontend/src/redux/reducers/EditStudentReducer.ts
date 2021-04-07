import {
    EDIT_STUDENT_LOADING,
    EDIT_STUDENT_SUCCESS,
    EDIT_STUDENT_FAILURE,
    EditStudentType,
    EditStudentDispatchTypes
  } from "../actionTypes/EditStudentActionTypes";
  
  interface IDefaultState {
    loading: boolean;
    editStudent?: EditStudentType;
  }
  
  const defaultState: IDefaultState = {
    loading: false,
  };
  
  const editStudentReducer = (
    state: IDefaultState = defaultState,
    action: EditStudentDispatchTypes
  ): IDefaultState => {
    switch (action.type) {
      case EDIT_STUDENT_FAILURE:
        return {
          loading: false,
        };
      case EDIT_STUDENT_LOADING:
        return {
          loading: true,
        };
      case EDIT_STUDENT_SUCCESS:
        return {
          loading: false,
          editStudent: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default editStudentReducer;
  