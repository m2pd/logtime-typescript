import { ActionTypes, Action } from './../../constaints/type';
import { Dispatch } from 'react';
import logtimeService from '../../services/logtime.service';

export interface GetLogTime {
  type:ActionTypes.getLogtime;
  payload: any
}
export interface GetLogTimeById {
  type:ActionTypes.getLogtimeById;
  payload: any
}

export const getLogtime = (id:number,FromDate:string,ToDate:string) => (dispatch:Dispatch<Action>) =>{
  return logtimeService.getLogtime(id,FromDate,ToDate)
  .then(res =>{
    dispatch({
      type:ActionTypes.getLogtime,
      payload: res.data
    })
  })
}

export const getLogtimeById = (id:number) => (dispatch:Dispatch<Action>) => {
  return logtimeService.getLogtimeById(id)
  .then(res =>{
    dispatch({
      type: ActionTypes.getLogtimeById,
      payload: res.data
    })
  })
}