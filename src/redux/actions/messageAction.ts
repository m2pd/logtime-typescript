import { ActionTypes } from './../../constaints/type';

export interface SetMessageAction {
    type: ActionTypes.setMessage;
    payload: string;
  }
  export interface ClearMessageAction {
    type: ActionTypes.clearMessage;
  }

export const setMessage = (message:string):SetMessageAction =>({
    type: ActionTypes.setMessage,
    payload: message
})

export const clearMessage = ():ClearMessageAction =>({
    type: ActionTypes.clearMessage
})