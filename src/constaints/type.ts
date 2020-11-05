import { GetUser,GetAllUsers, UpdateUser } from './../redux/actions/userAction';

import {
  ClearMessageAction,
  SetMessageAction,
} from './../redux/actions/messageAction';

import {
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
} from './../redux/actions/authAction';

import { GetLogTime, GetLogTimeById } from '../redux/actions/logtimeAction';

export enum ActionTypes {
  loginSuccess,
  loginFail,
  logout,

  getUser,
  getAllUser,
  updateUser,

  getLogtime,
  getLogtimeById,

  setMessage,
  clearMessage,
}

export type Action =
  | SetMessageAction
  | ClearMessageAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | UpdateUser
  | GetUser
  | GetAllUsers
  | GetLogTime
  | GetLogTimeById ;
