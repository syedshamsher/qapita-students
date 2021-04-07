export const FETCH_ALL_STUDENTS_LOADING = "FETCH_ALL_STUDENTS_LOADING";
export const FETCH_ALL_STUDENTS_FAILURE = "FETCH_ALL_STUDENTS_FAILURE";
export const FETCH_ALL_STUDENTS_SUCCESS = "FETCH_ALL_STUDENTS_SUCCESS";

export type StudentsType = {
  _id: string,
  name: string,
  age: number,
  email: string
}

export interface StudentsLoading {
  type: typeof FETCH_ALL_STUDENTS_LOADING
}

export interface StudentsFail {
  type: typeof FETCH_ALL_STUDENTS_FAILURE
}

export interface StudentsSuccess {
  type: typeof FETCH_ALL_STUDENTS_SUCCESS,
  payload: StudentsType
}

export type StudentsDispatchTypes = StudentsLoading | StudentsFail | StudentsSuccess