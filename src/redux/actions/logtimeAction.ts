import { ActionTypes, Action } from './../../constaints/type';
import { Dispatch } from 'react';
import logtimeService from '../../services/logtime.service';

export interface GetLogTime {
  type:ActionTypes.getLogtime;
  payload: any
}
export const getLogtime = (id:number,FromDate:Date,ToDate:Date) => (dispatch:Dispatch<Action>) =>{
  return logtimeService.getLogtime(id,FromDate,ToDate)
  .then(res =>{
    dispatch({
      type:ActionTypes.getLogtime,
      payload: res.data
    })
  })
}