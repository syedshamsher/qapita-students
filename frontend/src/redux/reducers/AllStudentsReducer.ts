import {
  FETCH_ALL_STUDENTS_FAILURE,
  FETCH_ALL_STUDENTS_LOADING,
  FETCH_ALL_STUDENTS_SUCCESS,
  StudentsDispatchTypes,
  StudentsType,
} from "../actionTypes/AllStudentsActionTypes";

interface IDefaultState {
  loading: boolean;
  allStudents?: StudentsType;
}

const defaultState: IDefaultState = {
  loading: false,
};

const allStudentsReducer = (
  state: IDefaultState = defaultState,
  action: StudentsDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS_FAILURE:
      return {
        loading: false,
      };
    case FETCH_ALL_STUDENTS_LOADING:
      return {
        loading: true,
      };
    case FETCH_ALL_STUDENTS_SUCCESS:
      return {
        loading: false,
        allStudents: action.payload,
      };
    default:
      return state;
  }
};

export default allStudentsReducer;
