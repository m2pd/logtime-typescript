import { ActionTypes, Action } from './../../constaints/type';

const initialValue = {
  users:[]
}
  

export default function(state = initialValue, action:Action){
  switch (action.type) {
    case ActionTypes.getAllUser:
      return {
        ...state,
        users: [...action.payload]
      }
  
    default:
      return state;
  }
}