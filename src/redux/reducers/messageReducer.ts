import { Action,ActionTypes } from './../../constaints/type';

const initialState = {

}

export default function(state =initialState, action:Action){
    switch (action.type) {
        case ActionTypes.setMessage:
            return {
                message: action.payload
            }

        case ActionTypes.clearMessage:
            return{
                message: ''
            }
            
        default:
            return state;
    }
}