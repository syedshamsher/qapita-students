import { combineReducers } from 'redux';
import addStudentReducer from './AddStudentReducer';
import allStudentsReducer from './AllStudentsReducer';
import editStudentReducer from './EditStudentReducer';

const RootReducer : any = combineReducers({
    allStudents: allStudentsReducer,
    addStudent: addStudentReducer,
    editStudent: editStudentReducer
});

export { RootReducer }