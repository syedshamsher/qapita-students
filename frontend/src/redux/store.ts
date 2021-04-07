import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {reducer as editReducer} from './EditDetail/reducer';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    edit : editReducer
})
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)