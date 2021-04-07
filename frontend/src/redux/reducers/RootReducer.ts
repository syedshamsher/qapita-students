import { combineReducers } from 'redux';
import addStudentReducer from './AddStudentReducer';
import allStudentsReducer from './AllStudentsReducer';

const RootReducer : any = combineReducers({
    allStudents: allStudentsReducer,
    addStudent: addStudentReducer
});

export { RootReducer }