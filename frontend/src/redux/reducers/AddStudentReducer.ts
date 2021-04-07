import {
    ADD_STUDENT_FAILURE,
    ADD_STUDENT_LOADING,
    ADD_STUDENT_SUCCESS,
    AddStudentDispatchTypes,
    AddStudentType,
  } from "../actionTypes/AddStudentActionTypes";
  
  interface IDefaultState {
    loading: boolean;
    addStudent?: AddStudentType;
  }
  
  const defaultState: IDefaultState = {
    loading: false,
  };
  
  const addStudentReducer = (
    state: IDefaultState = defaultState,
    action: AddStudentDispatchTypes
  ): IDefaultState => {
    switch (action.type) {
      case ADD_STUDENT_FAILURE:
        return {
          loading: false,
        };
      case ADD_STUDENT_LOADING:
        return {
          loading: true,
        };
      case ADD_STUDENT_SUCCESS:
        return {
          loading: false,
          addStudent: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addStudentReducer;
  