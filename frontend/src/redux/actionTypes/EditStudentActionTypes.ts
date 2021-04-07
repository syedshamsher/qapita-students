export const EDIT_STUDENT_LOADING = "EDIT_STUDENT_LOADING";
export const EDIT_STUDENT_FAILURE = "EDIT_STUDENT_FAILURE";
export const EDIT_STUDENT_SUCCESS = "EDIT_STUDENT_SUCCESS";

export type EditStudentType = {
  data: string,
}

export interface EditStudentLoading {
  type: typeof EDIT_STUDENT_LOADING
}

export interface EditStudentFail {
  type: typeof EDIT_STUDENT_FAILURE
}

export interface EditStudentSuccess {
  type: typeof EDIT_STUDENT_SUCCESS,
  payload: EditStudentType
}

export type EditStudentDispatchTypes = EditStudentLoading | EditStudentFail | EditStudentSuccess