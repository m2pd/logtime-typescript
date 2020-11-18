import { Action,ActionTypes } from './../../constaints/type';

const user = JSON.parse(localStorage.getItem('user') || 'null' )

const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };

export default function(state= initialState, action:Action){
    switch (action.type) {
        case ActionTypes.registerSuccess:
            return{
                ...state,
                isLoggedIn: false
            }
        case ActionTypes.registerFail:
            return{
                ...state,
                isLoggedIn: false
            }
        case ActionTypes.loginSuccess:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            }
        case ActionTypes.loginFail:
            return {
                ...state, 
                isLoggedIn: false,
                user: null
            }
        case ActionTypes.logout:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
            
        default:
            return state;
    }
}