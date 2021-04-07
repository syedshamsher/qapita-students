import {GET_STUDENT_DATA_REQ, GET_STUDENT_DATA_SUCCESS, GET_STUDENT_DATA_FAILURE, Idata} from './actionTypes'

interface IInitstate{
    data?: Idata;
    isLoading? : boolean;
    isError ?: boolean;

}
const initState: IInitstate = {
    isLoading : false,
    isError : false
}
export const reducer = (state: IInitstate = initState, {type, payload}: {type:string, payload: Idata}) =>{
    switch(type){
        case GET_STUDENT_DATA_REQ:
            return{
                ...state,
                isLoading : true
            }
        case GET_STUDENT_DATA_SUCCESS:
            return{
                ...state,
                isLoading : false,
                data : payload
            }
        case GET_STUDENT_DATA_FAILURE:
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        default:
            return state
    }
}