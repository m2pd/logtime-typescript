import { Action, ActionTypes } from './../../constaints/type';
import { Dispatch } from 'react';
import userService from '../../services/user.service';

export interface GetUser{
    type: ActionTypes.getUser,
    payload: any
}

export interface UpdateUser{
    type: ActionTypes.updateUser,
    payload: any
}
export const getUser = (id:number) => (dispatch:Dispatch<Action>) =>{
    return userService.getUserId(id)
    .then(res => {
        dispatch({
            type:ActionTypes.getUser,
            payload: res.data
        })
    })
}

export const updateUser = (id:number, data:any) => (dispatch:Dispatch<Action>)=> {
    return userService.updateUser(id, data)
    .then(res => {
        dispatch({
            type: ActionTypes.updateUser,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}