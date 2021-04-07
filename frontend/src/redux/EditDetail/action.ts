import axios from 'axios'
import {GET_STUDENT_DATA_REQ, GET_STUDENT_DATA_SUCCESS, GET_STUDENT_DATA_FAILURE, EditDispatchTypes, Idata} from './actionTypes'
import {Dispatch} from 'redux'

export const getStudentDataReq = () =>({
    type : GET_STUDENT_DATA_REQ
})

export const getStudentDataSuccess = (payload : Idata) =>({
    type : GET_STUDENT_DATA_SUCCESS,
    payload
})

export const getStudentDataFailure = () =>({
    type : GET_STUDENT_DATA_FAILURE
})

export const getStudentData = (id : number) => async(dispatch : Dispatch<EditDispatchTypes>) =>{
    try{

        dispatch({
            type : GET_STUDENT_DATA_REQ
        });

        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        dispatch({
            type : GET_STUDENT_DATA_SUCCESS,
            payload : res.data
        })
    }catch(err){
        dispatch({
            type : GET_STUDENT_DATA_FAILURE
        })
    }
    // dispatch(getStudentDataReq());

    // axios({
    //     method: 'get',
    //     url: `https://jsonplaceholder.typicode.com/users/${id}`
    // })
    // .then(res => dispatch(getStudentDataSuccess(res.data)))
    // .catch(err => dispatch(getStudentDataFailure()))
}