export const GET_STUDENT_DATA_REQ : string= "GET_STUDENT_DATA_REQ";
export const GET_STUDENT_DATA_SUCCESS : string= "GET_STUDENT_DATA_SUCCESS";
export const GET_STUDENT_DATA_FAILURE: string = "GET_STUDENT_DATA_FAILURE";

export interface Idata{
    name: string;
    username: string;
    email : string;
    website: string;
    id: number;
    address?:object;
    phone: string;
    company?: object;
}

export interface GetStudentsDataReq{
    type: typeof GET_STUDENT_DATA_REQ
}
export interface GetStudentsDataSuccess{
    type: typeof GET_STUDENT_DATA_SUCCESS,
    payload : Idata
}
export interface GetStudentsDataFailure{
    type: typeof GET_STUDENT_DATA_FAILURE
}

export type EditDispatchTypes = GetStudentsDataReq | GetStudentsDataSuccess | GetStudentsDataFailure