import {combineReducers} from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'
import userReducer from './userReducer'
import usersReducer from './usersReducer'
import logtimeReducer from './logtimeReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    currentUser: userReducer,
    users: usersReducer,
    logtime: logtimeReducer,
})