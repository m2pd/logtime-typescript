import { Action, ActionTypes } from './../../constaints/type';

export interface LogtimeCurrent{
  id: number;
  userId: number;
  date: Date;
  cost: number;
  title: string;
  description: string;
  projectTitle: string;
  overtime: boolean;
  activity: string;
  enable: boolean;
  comment:  string;
  createdAt:Date;
  updatedAt: Date;
}

const initialValues:{logtimeCurrent:LogtimeCurrent[]} = {
  logtimeCurrent: []
};

export default function(state=initialValues, actions:Action){
  switch (actions.type) {
    case ActionTypes.getLogtime:
      return{
        ...state,
        logtimeCurrent: actions.payload
      }
    
    case ActionTypes.getLogtimeById:
      return{
        ...state,
        logtimeCurrent: actions.payload
      }
  
    default:
      return state;
  }
}