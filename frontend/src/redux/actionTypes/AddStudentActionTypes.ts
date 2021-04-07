export const ADD_STUDENT_LOADING = "ADD_STUDENT_LOADING";
export const ADD_STUDENT_FAILURE = "ADD_STUDENT_FAILURE";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";

export type AddStudentType = {
  data: string,
}

export interface AddStudentLoading {
  type: typeof ADD_STUDENT_LOADING
}

export interface AddStudentFail {
  type: typeof ADD_STUDENT_FAILURE
}

export interface AddStudentSuccess {
  type: typeof ADD_STUDENT_SUCCESS,
  payload: AddStudentType
}

export type AddStudentDispatchTypes = AddStudentLoading | AddStudentFail | AddStudentSuccess