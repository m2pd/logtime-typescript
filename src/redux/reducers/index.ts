import {combineReducers} from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    currentUser: userReducer,
})