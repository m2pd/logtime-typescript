import { Action,ActionTypes } from './../../constaints/type';
const initialValues = {
    email:"",
    fullName:"",
    phoneNumber:"",
    userName:"",
    team:"",
    userRoles:[]
  }

export default function(state = initialValues, action:Action) {
    switch (action.type) {
        case ActionTypes.getUser:
            return{
                ...action.payload,
            }
        case ActionTypes.updateUser:
            return{
                ...state,
                ...action.payload,
            }
    
        default:
            return state;
    }
}